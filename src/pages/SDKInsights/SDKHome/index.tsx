import { ISEOPayload, useSetSEO } from 'contexts/SEOIntegration'
import React from 'react'

const PageSEO: ISEOPayload = {
	title: 'SDKs Insights | appwisp',
	description: 'Please select a cetegory to view insights about all the SDKs under that category, including the number of apps using the SDK, and breakdown of the usage of the SDKs witing the category.',
	keywords: [
		'Android SDKs',
		'Android SDK insights',
		'Android SDK usage',
		'iOS SDKs',
		'iOS SDK insights',
		'iOS SDK usage',
		'mobile SDKs',
	],

}

const SDKHome = React.memo( () => {

	useSetSEO( PageSEO )

	return (
		<div
			className='flex flex-col gap-4'
		>
			<h1
				className='text-4xl font-bold'
			>
				SDKs Insights
			</h1>
			<p
				className='text-default-500'
			>
				Please select a cetegory to view insights about all the SDKs
				under that category, including the number of apps using the SDK,
				and breakdown of the usage of the SDKs witing the category.
			</p>
		</div>
	)

} )

export default SDKHome