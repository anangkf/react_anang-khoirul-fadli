import {ApolloClient, InMemoryCache, split, HttpLink} from '@apollo/client'
import {GraphQLWsLink} from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'
import CONST from '../utils/constants'

const httpLink = new HttpLink(createClient({
    uri: CONST.BASE_URL,
    headers:{
        'x-hasura-admin-secret': CONST.ADMIN_SECRET
    }
}));

const wsLink = new GraphQLWsLink(createClient({
    url: 'wss://pasenger-list.hasura.app/v1/graphql',
    connectionParams:{
        headers:{
            'x-hasura-admin-secret': CONST.ADMIN_SECRET
        }
    }
}));

const splitLink = split(
    ({query}) =>{
        const definition = getMainDefinition(query);
        return(
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
})

export default client;