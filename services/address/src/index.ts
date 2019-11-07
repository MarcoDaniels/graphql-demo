import {ApolloServer} from 'apollo-server'
import {Resolvers} from './Resolvers'
import {Types} from './Types'

const server = new ApolloServer({
    resolvers: Resolvers,
    typeDefs: Types
})

server.listen()
    .then(({url}) => console.log(`Service address ready at ${url}`))
