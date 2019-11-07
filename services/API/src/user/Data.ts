import {UserType} from './Type'

export const getUser = (id: number) => {
    const [user] = users.filter(user => {
        return user.id === id
    })
    return user
}

export const getUsers = () => {
    return users
}

export const getFriends = (id: number) => {
    const user = getUser(id)
    const friendsIds = user.friends ? user.friends : []
    const friends = []
    friendsIds.forEach(id => {
        friends.push(getUser(id))
    })
    return friends
}

export const createUser = (name: string, role: string) => {
    const id = users.length + 1
    users.push({id, name, role})
    return getUser(id)
}

const users: UserType[] = [
    {
        id: 1,
        name: 'Demo User 1',
        role: 'admin',
        friends: [2]
    },
    {
        id: 2,
        name: 'Demo User 2',
        role: 'visitor',
        friends: [1, 3]
    },
    {
        id: 3,
        name: 'Demo User 3',
        role: 'coffee-bringer',
    },
    {
        id: 4,
        name: 'Demo User 4',
        role: 'coffee-drinker',
        friends: [1, 2, 3]
    }
]
