import {ApolloClient, InMemoryCache} from '@apollo/client'
import CONST from '../utils/constants'

const client = new ApolloClient({
    uri: CONST.BASE_URL,
    cache: new InMemoryCache(),
    headers:{
        'x-hasura-admin-secret': CONST.ADMIN_SECRET
    }
})

export default client;