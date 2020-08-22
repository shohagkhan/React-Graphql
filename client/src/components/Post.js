import React from 'react'

import { useQuery, gql } from '@apollo/client';

const Posts = gql`
   query {
   posts {
      id
      title
   }
   }
`;




export function Post() {
   const { loading, error, data } = useQuery(Posts);

   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error :(</p>;
      
   return data.posts.map(({ id, title }) => (
      <div key={id}>
         <p>
            {id}: {title}
         </p>
      </div>
   ));

}