import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createServer as createViteServer } from 'vite'
import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'
import 'dotenv/config'
import 'isomorphic-fetch'
import http from 'http'
import { Server } from 'socket.io'
import axios from 'axios'
import {
	encryptMesage,
	decryptMessage,
} from './src/utils/encryptionServer.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const {
	PORT = '3000',
	NODE_ENV = 'development',
	VITE_APP_BACKEND_GRAPHQL_ENDPOINT,
// eslint-disable-next-line no-undef
} = process.env

const isProduction = NODE_ENV === 'production'

const resolve = p => path.resolve( __dirname, p )

const useIndexHtml = isProduction
	? resolve( 'dist/client/index.html' )
	: resolve( './index.html' )
const useServerEntry = isProduction
	? resolve( 'dist/server/entry-server.js' )
	: resolve( './src/entry-server.tsx' )

async function createServer() {
  const app = express()

	// Create Vite server in middleware mode and configure the app type as
	// 'custom', disabling Vite's own HTML serving logic so parent server
	// can take control
	const vite = await createViteServer({
		server: { middlewareMode: true },
		appType: 'custom'
	})

  if ( isProduction ) {
	app.use((await import('compression')).default())
	app.use(
		(await import('serve-static')).default(resolve('dist/client'), {
			index: false,
		}),
	)
  } else {
	// Use vite's connect instance as middleware. If you use your own
	// express router (express.Router()), you should use router.use
	app.use(vite.middlewares)

  }

	const PROXY_GRAPHQL_ENDPOINT = VITE_APP_BACKEND_GRAPHQL_ENDPOINT
	console.log( 'server', PROXY_GRAPHQL_ENDPOINT )
	app.use( '/api/graphql', createProxyMiddleware( {
		target: PROXY_GRAPHQL_ENDPOINT,
		changeOrigin: true,
	} ) )


	let template = fs.readFileSync(
		path.resolve(__dirname, useIndexHtml ),
		'utf-8',
	)

  app.get( '*', async ( req, res, next ) => {
	const url = req.originalUrl

	try {
		// 2. Apply Vite HTML transforms. This injects the Vite HMR client,
		//    and also applies HTML transforms from Vite plugins, e.g. global
		//    preambles from @vitejs/plugin-react
		if ( !isProduction ) {
			template = await vite.transformIndexHtml(url, template)
		}

		// 3. Load the server entry. ssrLoadModule automatically transforms
		//    ESM source code to be usable in Node.js! There is no bundling
		//    required, and provides efficient invalidation similar to HMR.
		let render

		let useSSR = true

		if ( isProduction ) {
			useSSR = true
			render = (await import( useServerEntry ) ).render
		} else {
			render = (await vite.ssrLoadModule( useServerEntry )).render
		}
		// 4. render the app HTML. This assumes entry-server.js's exported
		//     `render` function calls appropriate framework SSR APIs,
		//    e.g. ReactDOMServer.renderToString()
		const {
			html: appHtml,
			styles,
			statusCode,
			SEOData,
		} = await render( req, useSSR )

		// 5. Inject the app-rendered HTML into the template.
		const html = template
			.replace(`<!--ssr-outlet-->`, appHtml)
			.replace(`<!--ssr-styles-->`, styles)
			.replace(`<!--ssr-seo-title-->`, SEOData.title)
			.replace(`<!--ssr-seo-description-->`, SEOData.description)
			.replace(`<!--ssr-seo-keywords-->`, SEOData.keywords.join(',') )
			.replace(`<!--ssr-seo-canonical-->`, SEOData.canonical ? `<link rel="canonical" href="${ SEOData.canonical }" />` : '' )

		// 6. Send the rendered HTML back.
		res.status( statusCode ).set({ 'Content-Type': 'text/html' }).end(html)
	} catch (e) {
		console.error( e )
		// If an error is caught, let Vite fix the stack trace so it maps back
		// to your actual source code.
		vite.ssrFixStacktrace(e)
		next(e)
	}

  } )

  const server = http.createServer( app )
  const io = new Server( server )

  server.listen( PORT, () => {
	console.log( `Server running on port ${PORT}` )
	console.log( `Production:`, isProduction )
  } )

  io.engine.on("connection_error", (err) => {
	console.log(err.req);      // the request object
	console.log(err.code);     // the error code, for example 1
	console.log(err.message);  // the error message, for example "Session ID unknown"
	console.log(err.context);  // some additional error context
  })

  io.on( 'connection', ( socket ) => {

	socket.on( 'request', async ( recv ) => {
		const [ reqId, {
			body,
			headers,
		} ] = JSON.parse( decryptMessage( recv ) )

		console.log( 'Req to: ', PROXY_GRAPHQL_ENDPOINT )

		try {
			const { data } = await axios.post( PROXY_GRAPHQL_ENDPOINT, JSON.parse( body ), {
				headers,
			} )
			socket.emit( 'response', encryptMesage( JSON.stringify( [ reqId, data ] ) ) )
		} catch( e ) {
			console.error( e )
		}
	} )

  } )

}

createServer()