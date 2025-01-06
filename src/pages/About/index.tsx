import { ISEOPayload, useSetSEO } from 'contexts/SEOIntegration'
import React from 'react'

const SEOData: ISEOPayload = {
	title: 'About appwisp | appwisp',
	description: 'Welcome to appwisp – your compass in the world of mobile apps. We\'ve curated a vast collection of apps from the App Store and Google Play Store, offering a straightforward exploration of their usage and the SDKs they employ.',
	keywords: [
		'About appwisp',
		'appwisp',
		'appwisp app insights',
		'appwisp app market insights',
		'appwisp app market',
	],
}

const About: React.FC = React.memo( () => {

	useSetSEO( SEOData )

	return (
		<div
			className='flex flex-col gap-8 container mx-auto px-4 py-8 max-w-3xl'
		>
			<h1
				className='text-4xl text-center'
			>
				About appwisp
			</h1>
			<section>
				Welcome to appwisp – your compass in the world of mobile apps. We've curated a vast collection of apps from the App Store and Google Play Store, offering a straightforward exploration of their usage and the SDKs they employ.
			</section>
			<section
				className='flex flex-col gap-2'
			>
				<h3
					className='text-xl text-default-500'
				>
					For App Developers:
				</h3>
				Discover where you stand in the app market. Dive into detailed insights about your app, including usage patterns and performance metrics. Gain an edge by understanding what SDKs are trending and how you compare to your competition.
			</section>
			<section>
				<h3
					className='text-xl text-default-500'
				>
					For SDK Providers:
				</h3>
				Unlock key market intelligence. Get a clear view of your SDK's market share, identify competitors, and spot collaboration opportunities.
			</section>
			<section>
				<h3
					className='text-xl text-default-500'
				>
					Our Data Sources:
				</h3>
				We pull data directly from the official sources – the Play Store and App Store. But we go further. By extracting information from Android APKs and iOS IPAs, we ensure a complete and accurate picture of the app landscape.
			</section>
			<section>
				Join appwisp as we simplify the app world for developers and SDK providers alike. Empowering you with the insights needed to navigate and succeed in the dynamic mobile app ecosystem.
			</section>
		</div>
	)
} )

export default About