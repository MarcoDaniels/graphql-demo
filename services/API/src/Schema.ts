import {GraphQLObjectType, GraphQLSchema} from 'graphql'
import {UserQuery} from './user/Query'
import {UserMutation} from './user/Mutation'
import {User} from './user/Type'
import {pubSub, TOPICS} from './Subscriptions'

const Query = new GraphQLObjectType({
    name: 'Query',
    description: 'The base query',
    fields: {
        user: {
            type: UserQuery,
            description: UserQuery.description,
            resolve: () => { return {} }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'The base mutation',
    fields: {
        user: {
            type: UserMutation,
            description: UserMutation.description,
            resolve: () => { return {} }
        }
    }
})

const Subscription = new GraphQLObjectType({
    name: 'Subscription',
    description: 'The base subscription',
    fields: {
        userCreated: {
            type: User,
            description: User.description,
            resolve: (message: any) => { return message},
            subscribe: () => pubSub.asyncIterator([TOPICS.NEW_USER_TOPIC])
        }
    }
})

export const schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
    subscription: Subscription
})
