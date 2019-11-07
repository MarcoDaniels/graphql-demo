import {GraphQLID, GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql'
import {ListUserFriends} from './Query'

export type UserType = {
    id: number
    name: string
    role: string
    friends?: number[]
}

export const User = new GraphQLObjectType({
    name: 'User',
    description: 'The user',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'The unique user id'
        },
        name: {
            type: GraphQLNonNull(GraphQLString),
            description: 'The user name'
        },
        role: {
            type: GraphQLNonNull(GraphQLString),
            description: 'The user role'
        },
        friends: {
            ...ListUserFriends
        }
    })
})


export const UserInput = new GraphQLInputObjectType({
    name: 'UserInput',
    description: 'User create type',
    fields: {
        name: {
            type: GraphQLNonNull(GraphQLString),
            description: 'The user name'
        },
        role: {
            type: GraphQLNonNull(GraphQLString),
            description: 'The user role'
        },
    }
})
