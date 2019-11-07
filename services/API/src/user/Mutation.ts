import {GraphQLFieldConfig, GraphQLObjectType} from 'graphql'
import {User, UserInput} from './Type'
import {createUser} from './Data'
import {pubSub, TOPICS} from '../Subscriptions'

const CreateUser: GraphQLFieldConfig<any, any, any> = {
    type: User,
    description: User.description,
    args: {
        input: {
            type: UserInput,
            description: UserInput.description
        }
    },
    resolve: (parent, args) => {
        const payload = args.input

        const user = createUser(
            payload.name,
            payload.role
        )
        pubSub.publish(TOPICS.NEW_USER_TOPIC, user).then()

        return user
    }
}

export const UserMutation = new GraphQLObjectType({
    name: 'UserMutation',
    description: 'The user base mutation',
    fields: {
        create: CreateUser
    }
})
