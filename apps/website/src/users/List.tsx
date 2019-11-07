import {gql} from 'apollo-boost'
import React, {FC} from 'react'
import {useQuery} from '@apollo/react-hooks'
import {listUsers} from '../generated/listUsers'

const LIST_USERS = gql`
    query listUsers {
        user {
            list {
                name
                role
            }
        }
    }
`

export const ListUsers: FC = () => {
    const {loading, error, data} = useQuery<listUsers>(LIST_USERS)

    if (loading) return <div><p>Loading...</p></div>
    if (error) return <div><p>Error!</p></div>
    if (!data || !data.user || !data.user.list) return <div><p>no users</p></div>

    return (
        <div>
            {data.user.list.map((user, key) => {
                return (user && (
                    <div key={key}>
                        <h3>{user.name}</h3>
                        <p>{user.role}</p>
                    </div>
                ))
            })}
        </div>
    )
}
