import {Address} from './Types'
import {addresses} from './Data'

export const Resolvers = {
    Query: {
        getAddress: (parent, args): Address => {
            const [address] = addresses.filter((address) => {
                return address.identifier === args.input.identifier
            })
            return address
        },
        listAddress: (): Address[] => {
            return addresses
        }
    }
}
