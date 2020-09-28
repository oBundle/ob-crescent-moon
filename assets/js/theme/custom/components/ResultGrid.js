import React, {useState, useEffect} from "react";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

import ProductResultCard from "./ProductResultCard"

export default function ResultGrid(props) {
  const { context, csvData, userChoices } = props;
  const [hasLoaded, sethasLoaded] = useState(false) 
  const [hasError, sethasError] = useState(false) 
  const [productData, setProductData] = useState([]) 

  //fetch graphql data (async)
	useEffect(() => {
    getProductData(context.storefrontAPIToken, productIds, sethasLoaded, sethasError, setProductData);
	}, []);

  const productIds = getRecommendedProducts(userChoices, csvData)
  console.log('product Ids', productIds)
  let productCards
  if (hasLoaded) {
    console.log('product data to render', productData)
  }

  return <div className="wizard-result-grid-container">{productCards}</div>;
}

//function to check if userChoices exists inside of csvData
//then maps over csv data row and returns an array of 
//3 product ids to pass into gql query
const getRecommendedProducts = (userChoices, csvData) => {
  let recommendedRow = csvData.filter(row => {
    let rowStr = row.join()
    let userChoicesStr = userChoices.join()

    if (rowStr.includes(userChoicesStr)) {return row}
  })
  
  let productIds = recommendedRow[0] && recommendedRow[0][7].split(",").map(id => parseInt(id, 10))
  return productIds
}

//function that returns react components based off of getRecommendedProducts gql query

const getProductData = (token, productIds, sethasLoaded, setProductData, sethasError) => {
  const client = new ApolloClient({
    headers: { Authorization: `Bearer ${token}` },
  });

  client.query({
      variables: {productIds: productIds},
      query: gql`
        query SeveralProductsByID($productIds: [Int!]!) {
          site {
            products(entityIds: $productIds) {
              edges {
                node {
                  name
                  path
                  defaultImage {
                    url(width: 640)
                  }
                  prices {
                    price {
                      value
                      currencyCode
                    }
                  }
                  productOptions {
                    edges {
                      node {
                        entityId
                        displayName
                        ... on MultipleChoiceOption {
                          values {
                            edges {
                              node {
                                ... on SwatchOptionValue {
                                  label
                                  hexColors
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
    })
    .then(data => {
      console.log(data)
      let { edges } = data.data.site.products
      let productDataArr = edges.map(edge => {
        let productObj = {
          imgUrl: edge.node.defaultImage.url,
          price: edge.node.prices.price.value,
          name: edge.node.name,
          url: edge.node.path
        }
        return productObj
      })
      console.log('productDataArr',productDataArr)
      setProductData([...productDataArr])
      sethasLoaded(true)
     
    })
    .catch((error) => error && sethasError(true));
};