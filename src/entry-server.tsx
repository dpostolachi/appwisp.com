import createCache from '@emotion/cache'
import createEmotionServer from '@emotion/server/create-instance'
import { renderToString } from 'react-dom/server'
import ServerApp from './ServerApp'
import { createRelayEnvironment } from 'relay/env'
import { Environment, Network } from '@react-relay'
import RelayServerSSR from 'react-relay-network-modern-ssr/lib/server'
import { Request } from 'express'

const USE_SSR = true

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const render = async ( req: Request, useSSR: boolean ) => {

	const url = req.originalUrl
	const statusCode = 200

	console.log( url )

	const {
		environment,
		relaySSRStore,
		relaySSRMiddleware,
	} = createRelayEnvironment( {
	} )

	const SEOData = {
		title: 'appwisp',
		description: 'appwisp',
		keywords: [ 'appwisp' ],
	}

	const cache = createCache( {
		key: 'css',
	} )
	const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache)


	renderToString(
		<ServerApp
			url={ url }
			relayEnvironment={ environment }
			emotionCache={ cache }
		/>
	)

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let relayData: any = undefined
	if ( USE_SSR && useSSR ) {
		try {
			relayData = await ( relaySSRMiddleware as RelayServerSSR ).getCache()
		} catch ( e ) {
			console.log( 'Error getting cache', e )
			console.trace( e )
		}
	}

	const reuseEnv = new Environment( {
		network: Network.create( () => relayData[0][1] ),
		store: relaySSRStore
	} )

	const html = renderToString(
		<ServerApp
			url={ url }
			relayEnvironment={ reuseEnv }
			emotionCache={ cache }
			cachedData={ relayData }
			onSEOChange={ ( data ) => {
				Object.assign( SEOData, data )
			} }
		/>
	)

	const chunks = extractCriticalToChunks(html)
	const styles = constructStyleTagsFromChunks(chunks)

	return {
		html,
		styles,
		statusCode,
		SEOData,
	}

}
