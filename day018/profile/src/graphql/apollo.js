import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
const client = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql',
  cache: new InMemoryCache(),
});

const GraphProvider = ({children}) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
export {GraphProvider};
export default client;
