const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
  type Query {
    hello(name: String, prenom: String): String
    add(valeur1: Int, valeur2: Int): Int

    }
`

const resolvers = {
  Query: {
    hello: (_, args) => `Hello ${args.name || ''} ${args.prenom || ''}!`,
    // Addition de 2 nombres saisis
    add: (_, args) => args.valeur1 + args.valeur2,


  },
}


const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log(`Server is running at http://localhost:4000`))
