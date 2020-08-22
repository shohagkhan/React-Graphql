import React from 'react'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Post } from './components/Post';
import { MDBContainer} from 'mdbreact';
import { Table } from './components/Table';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      {/* <div>
        <Post />
      </div> */}
      <MDBContainer>
        <Table/>
      </MDBContainer>
    </ApolloProvider>
  )
}

export default App;
