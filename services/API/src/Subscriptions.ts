import {PubSub} from 'apollo-server'

export const pubSub = new PubSub()

export enum TOPICS {
    NEW_USER_TOPIC = 'new_user',
}

