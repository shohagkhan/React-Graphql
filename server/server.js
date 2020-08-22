
const { GraphQLServer } = require('graphql-yoga')
// const Link = require('./resolvers/Link')

const posts = [
  {id: "1", title: "I am the first title"},
  {id: "2", title: "I am the second title"}
]

const resolvers = {
  Query: {
    posts: () => {
      return posts;
    }
  }
}


const server = new GraphQLServer({ 
  typeDefs: './schema.graphql', 
  resolvers
 })
server.start(({port}) => console.log(`Server is running on http://localhost:${port}`))