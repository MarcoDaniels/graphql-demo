import React, {FC} from 'react'
import {gql} from 'apollo-boost'
import {useSubscription} from '@apollo/react-hooks'
import {created} from '../generated/created'

const USER_CREATED = gql`
    subscription created {
        userCreated {
            name
        }
    }
`

export const LiveUser: FC = () => {
    const {loading, data} = useSubscription<created>(USER_CREATED)

    return (
        <div>
            <p>{loading ? `...` : data!.userCreated!.name}</p>
        </div>
    )
}
