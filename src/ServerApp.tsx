/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { StaticRouter } from 'react-router-dom/server'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { RelayEnvironmentProvider } from '@react-relay';
import App from 'AppServer';
import { ISEOPayload, SEOIntegrationContextProvider } from 'contexts/SEOIntegration';

const UseRelayEnvironment = RelayEnvironmentProvider as React.FC<{
    environment: any;
    children: React.ReactNode;
}>

const ServerApp: React.FC<{
	url: string,
	relayEnvironment: unknown,
	emotionCache: EmotionCache,
	cachedData?: unknown,
    onSEOChange?: ( payload: ISEOPayload ) => void;
}> = ( {
	url,
	relayEnvironment,
	emotionCache,
	cachedData,
	onSEOChange,
} ) => {


	return (
		<StaticRouter
            location={ url }
		>
            <SEOIntegrationContextProvider
				onSEOChange={ onSEOChange }
			>
                <UseRelayEnvironment
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    environment={ relayEnvironment as any } // can't really figure out the proper type of this
                >
                    <React.Suspense fallback={ null }>
                        <CacheProvider value={ emotionCache }>
                            <App />
                            { cachedData ? (
                                    <script
                                        dangerouslySetInnerHTML={ {
                                            __html: `window.__RELAY_BOOTSTRAP_DATA__ = ${ JSON.stringify( cachedData ) };`,
                                        } }
                                        id="relay-data"
                                    />
                            ) : null }
                        </CacheProvider>
                    </React.Suspense>
                </UseRelayEnvironment>
            </SEOIntegrationContextProvider>
		</StaticRouter>
	)
}

export default ServerApp;
