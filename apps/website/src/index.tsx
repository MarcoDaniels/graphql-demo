import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {ApolloClient, HttpLink, split} from 'apollo-boost'
import {ApolloProvider} from '@apollo/react-hooks'
import {WebSocketLink} from 'apollo-link-ws'
import {getMainDefinition} from 'apollo-utilities'
import {InMemoryCache} from 'apollo-cache-inmemory'

const httpLink = new HttpLink({
    uri: 'http://localhost:4000'
})

const wsLink = new WebSocketLink({
    uri: `ws://localhost:4000/graphql`,
    options: {
        reconnect: true
    }
})

const link = split(
    ({query}) => {
        const definition = getMainDefinition(query)
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        )
    },
    wsLink,
    httpLink,
)

const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache()
})

const Wrapper = () => (
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
)

ReactDOM.render(<Wrapper/>, document.getElementById('root'))
