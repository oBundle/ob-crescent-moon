
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
/**
 * Run a basic request against the GraphQL Storefront API using Apollo Client and log the results to the browser console
 */
export default function (token) {
    const client = new ApolloClient({
        headers: { Authorization: `Bearer ${token}` },
    });

    client.query({
        query: gql`
        query SeveralProductsByID {
          site {
            products(entityIds: [123, 127, 128]) {
              edges {
                node {
                  name
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
        .then(data => console.log('gql data', data))
        .catch(error => console.error(error));
}

