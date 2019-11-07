import React, {FC} from 'react'
import {gql} from 'apollo-boost'
import {useMutation} from '@apollo/react-hooks'
import {createUser_user_create, createUserVariables} from '../generated/createUser'
import {UserInput} from '../generated/globalTypes'

const CREATE_USERS = gql`
    mutation createUser($input: UserInput!) {
        user {
            create(input: $input) {
                name
            }
        }
    }
`

export const CreateUser: FC = () => {
    const [create] = useMutation<createUser_user_create, createUserVariables>(CREATE_USERS)

    let name: any
    let role: any
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()

                const user: UserInput = {
                    name: name.value,
                    role: role.value,
                }

                create({variables: {input: user}})
                    .then(result => console.log(result))

                name.value = ''
                role.value = ''
            }}>
                <input
                    required
                    placeholder={'name'}
                    ref={node => {name = node}}
                />
                <input
                    required
                    placeholder={'tole'}
                    ref={node => {role = node}}
                />
                <button type={'submit'}>Create</button>
            </form>
        </div>
    )
}
