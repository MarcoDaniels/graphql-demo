import {gql} from 'apollo-server'

export type Address = {
    identifier: number
    streetName: string
    zipcode: number
    region?: string
    country?: string
}

export const Types = gql`
    type Address {
        streetName: String!
        zipcode: Int!
        region: String
        country: String
    }
    
    input AddressInput {
        identifier: Int   
    }
    
    type Query {
        """
        returns a address
        """
        getAddress(input: AddressInput): Address!
        """
        returns a list of addresses
        """
        listAddress: [Address]
    }
`
