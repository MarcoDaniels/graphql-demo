import {GraphQLFieldConfig, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType} from 'graphql'
import {User} from './Type'
import {getFriends, getUser, getUsers} from './Data'

const GetUser: GraphQLFieldConfig<any, any, any> = {
    type: User,
    description: User.description,
    args: {
        id: {
            type: GraphQLNonNull(GraphQLInt),
            description: 'The user id'
        }
    },
    resolve: (source, args) => {
        return getUser(args.id)
    },
}

const ListUsers: GraphQLFieldConfig<any, any, any> = {
    type: GraphQLList(User),
    description: User.description,
    resolve: () => {
        return getUsers()
    }
}

export const ListUserFriends: GraphQLFieldConfig<any, any, any> = {
    type: GraphQLList(User),
    description: 'The list of user friends',
    resolve: (parent) => {
        return getFriends(parent.id)
    }
}

export const UserQuery = new GraphQLObjectType({
    name: 'UserQuery',
    description: 'The user base query',
    fields: {
        get: GetUser,
        list: ListUsers
    }
})
