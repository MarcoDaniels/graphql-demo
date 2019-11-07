import {ApolloServer} from 'apollo-server'
import {schema} from './Schema'

const server = new ApolloServer({
    schema
})

server.listen().then(({url, subscriptionsUrl}) => {
    console.log(`🚀 Service API ready at ${url}`)
    console.log(`🚀 Service API subscriptions ready at ${subscriptionsUrl}`)
})
