import React from 'react'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Post } from './components/Post';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <Post />
      </div>
    </ApolloProvider>
  )
}

export default App;
