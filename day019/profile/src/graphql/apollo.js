import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://172.18.0.1:8080/v1/graphql',
  }),
  cache: new InMemoryCache(),
});

const GraphProvider = ({children}) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
export {GraphProvider};
export default client;
