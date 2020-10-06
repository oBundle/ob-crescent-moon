import React, {useState, useEffect} from "react";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

import ProductResultCard from "./ProductResultCard"
import Loading from "./Loading"

export default function ResultGrid(props) {
  const { context, csvData, userChoices } = props;
  const [hasLoaded, sethasLoaded] = useState(false) 
  const [hasError, sethasError] = useState(false) 
  const [productData, setProductData] = useState([]) 

  const productIds = getRecommendedProducts(userChoices, csvData)
  const bestFitIds = getBestFits(userChoices, csvData)
  //fetch graphql data (async)
	useEffect(() => {
    getProductData(context.storefrontAPIToken, productIds, sethasLoaded, sethasError, setProductData);
  }, []);
  

  console.log('best fit ids', bestFitIds)
  let productCards
  if (hasLoaded) {
    console.log('productIds', productIds)
    console.log('product data to render', productData)
    productCards = productData.map((product, index) => <ProductResultCard key={name+index} bestFitIds={bestFitIds} url={product.url} name={product.name} price={product.price} imgUrl={product.imgUrl} id={product.id}/>)
  }

  return <div className="wizard-result-grid-container">{productCards ? productCards : <Loading />}</div>;
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

const getBestFits = (userChoices, csvData) => {
  let recommendedRow = csvData.filter(row => {
    let rowStr = row.join()
    let userChoicesStr = userChoices.join()
    if (rowStr.includes(userChoicesStr)) {return row}
  }) 
  let bestFitIds = recommendedRow[0] && recommendedRow[0][8].split(",").map(id => parseInt(id, 10))
  return bestFitIds
}
//function that returns react components based off of getRecommendedProducts gql query

const getProductData = (token, productIds, sethasLoaded, sethasError, setProductData) => {
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
                  entityId
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
                }
              }
            }
          }
        }
      `,
    })
    .then(data => {
      console.log('gql data', data)
      let { edges } = data.data.site.products
      let productDataArr = edges.map(edge => {
        let productObj = {
          imgUrl: edge.node.defaultImage.url,
          price: edge.node.prices.price.value,
          name: edge.node.name,
          url: edge.node.path,
          id: edge.node.entityId
        }
        return productObj
      })
      console.log('productDataArr',productDataArr)
      setProductData(productDataArr)
      sethasLoaded(true)
     
    })
    .catch((error) => error && sethasError(true));
};


// productOptions {
//   edges {
//     node {
//       entityId
//       displayName
//       ... on MultipleChoiceOption {
//         values {
//           edges {
//             node {
//               ... on SwatchOptionValue {
//                 label
//                 hexColors
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }