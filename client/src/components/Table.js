import React from 'react'
import { MDBDataTable } from 'mdbreact';

import { useQuery, gql } from '@apollo/client';

const Posts = gql`
   query {
   posts {
      id
      title
   }
   }
`;




export const Table = () => {

   const { loading, error, data } = useQuery(Posts);

   if (loading) return <p>Loading...</p>;
   if (error) return <p>Error :(</p>;


   const info = {
      columns: [
         {
            label: 'ID',
            field: 'id',
            sort: 'asc',
            width: 150
         },
         {
            label: 'Title',
            field: 'title',
            sort: 'asc',
            width: 150
         }
      ],
      rows: [
      ...data.posts
      ]
   }

   

   return (
      <MDBDataTable
         striped
         bordered
         small
         data={info}
      />
   )
}
