import React from 'react'
import './index.css'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { ensureLoaded } from 'ClientRouter'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false

const main = async () => {

  const [
    ReactDOMDom,
    RelayMod,
    ClientApp,
  ] = await Promise.all( [
    import( 'react-dom/client' ),
    import( 'relay/env.ts' ),
    import( 'ClientApp' ),
  ] )

  await ensureLoaded()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const relayCache = ( window as unknown as { __RELAY_CACHE: any } ).__RELAY_CACHE
  const { environment } = RelayMod.createRelayEnvironment( {
    cache: relayCache, 
  } )


  const isServerRendered = Boolean( relayCache )

  if ( isServerRendered ) {
    const emotionCache = createCache( {
      key: 'css',
    } )
    
    ReactDOMDom.hydrateRoot( document.getElementById( 'root' )!, (
      <React.StrictMode>
        <CacheProvider value={ emotionCache	 }>
            <ClientApp.default
              relayEnvironment={ environment }
            />
        </CacheProvider>
      </React.StrictMode>
    ) )
  } else {

    ReactDOMDom.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
          <ClientApp.default
            relayEnvironment={ environment }
          />
      </React.StrictMode>
    )

  }

}

main()
