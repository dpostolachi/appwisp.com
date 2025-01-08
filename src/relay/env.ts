/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Environment, RecordSource, Store,
} from '@react-relay';
import { GRAPHQL_ENDPOINT, USE_WEBSOCKET } from 'config';
import { RelayClientSSR, RelayServerSSR } from '@react-relay';
import {
	RelayNetworkLayer,
	urlMiddleware,
	authMiddleware,
	errorMiddleware,
	Middleware,
	MiddlewareNextFn,
	RelayRequestAny,
} from 'react-relay-network-modern'
import SocketClient from './socketClient';

const isServer = import.meta.env.SSR
const GraphQLEndpoint = GRAPHQL_ENDPOINT

const createWSMiddleware = () => {

	const socketClient = new SocketClient()

	const middleware: Middleware = ( next: MiddlewareNextFn ) => {
		return async ( req: RelayRequestAny ) => {

			const {
				body,
				headers,
			} = req.fetchOpts

			
			if ( body instanceof FormData || !USE_WEBSOCKET ) {
				return next( req )
			}

			const client = await socketClient.getClient()

			const resp = ( await client.sendRequest( {
				body,
				headers,
			} ) ) as { data: any, errors: any }

			const { data, errors } = resp

			if ( errors ) {
				throw errors
			}

			const response = {
				ok: true,
				status: 200,
				_res: {},
				json: {},
				clone() {
					return response
				},
				data,
				errors,
				processJsonData: () => null,
			}

			return response

		}
	}

	return middleware

}

export const createRelayEnvironment = ( {
	cache,
	// token = null // @note: use for later
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any = {} ) => {

	const relaySSRMiddleware = isServer ? new RelayServerSSR()
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		: new RelayClientSSR( ( window as any ).__RELAY_BOOTSTRAP_DATA__ )

	const middlewares = isServer ? [
		relaySSRMiddleware.getMiddleware( ( isServer ? undefined : { lookup: true } ) as any ),
		urlMiddleware( {
			url: GraphQLEndpoint,
		} ),
		authMiddleware({
            // @note: will be used later for authorization
			// token: () => {
			// 	const useToken = getToken() || token
			// 	return useToken
			// }
		}),
		errorMiddleware(),
	] : [
		relaySSRMiddleware.getMiddleware( ( isServer ? undefined : { lookup: true } ) as any ),
		urlMiddleware( {
			url: GraphQLEndpoint,
		} ),
		authMiddleware({
            // @note: will be used later for authorization
			// token: () => {
			// 	const useToken = getToken() || token
			// 	return useToken
			// }
		}),
		errorMiddleware(),
		createWSMiddleware(),
	]

	const network = new RelayNetworkLayer( middlewares )

	const source = new RecordSource( cache )
	const store = new Store( source )

	const environment = new Environment( {
		network,
		store
	} );

	return {
		environment,
		relaySSRMiddleware,
		relaySSRStore: store
	}

}