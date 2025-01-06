import React from 'react'
import { useLazyLoadQuery } from '@react-relay'
import { useParams } from 'react-router-dom'
import { graphql } from '@react-relay'
import { SDKCategoryViewQuery } from './__generated__/SDKCategoryViewQuery.graphql'
import SDKDistribution, { SDKDistributionPlaceholder } from './SDKDistribution'
import { ISEOPayload, useSetSEO } from 'contexts/SEOIntegration'

const SDKCategoryViewPlaceholder = () => {
	return (
		<div
			className='flex flex-col gap-12'
		>
			<h1
				className='text-2xl font-bold'
			>
				<div className="h-10 w-full rounded-lg bg-default-200"></div>
			</h1>
			<div className='flex flex-col gap-4'>
				<SDKDistributionPlaceholder />
			</div>
		</div>
	)
}

const SDKCategoryView: React.FC = () => {

	const {
		id,
	} = useParams<{
		id: string
	}>()

	const useId = React.useMemo( () => {
		const rawId = id!
		// check if it's a base64 encoded id
		try {
			const decoded = atob( rawId )
			if ( decoded.startsWith( 'AndroidSdkCategory' ) ) {
				return rawId
			}
			return btoa( `AndroidSdkCategory:${ rawId }` )
		} catch ( e ) {
			const decoded = `AndroidSdkCategory:${ rawId }`
			return btoa( decoded )
		}
	}, [ id ] )

	const {
		node,
	} = useLazyLoadQuery<SDKCategoryViewQuery>( query, {
		id: useId,
	} )

	const seoData: ISEOPayload = React.useMemo( () => {
		return {
			title: `Comprehensive ${ node?.name } SDK Insights and Market Share Analysis | AppWisp`,
			description: `Explore detailed insights and market share analysis on [Category] SDKs used in top mobile apps. Discover the best ${ node?.name } SDKs to enhance your app's capabilities with AppWisp's comprehensive insights and market trends.`,
			keywords: [
				`Top ${ node?.name } mobile SDKs`,
				`${ node?.name } Android SDKs`,
				`${ node?.name } Android SDK insights`,
				`${ node?.name } Android SDK usage`,
				`Top ${ node?.name } iOS SDKs`,
				`${ node?.name } iOS SDKs`,
				`${ node?.name } iOS SDK insights`,
				`${ node?.name } iOS SDK usage`,
				`${ node?.name } mobile SDKs`,
			],
			canonical: `/sdk/insights/${ node?.slug }`,
		}
	}, [ node?.name ] )

	useSetSEO( seoData )

	const containerRef = React.useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>

	React.useEffect( () => {

		const container = containerRef.current
		if ( !container ) {
			return
		}

		container.scrollIntoView( {
			behavior: 'smooth',
		} )

	}, [ id ] )

	return (
		<div
			className='flex flex-col gap-10'
			ref={ containerRef }
		>
			<h1
				className='text-4xl font-bold'
			>
				{ node?.name } SDKs Insights
			</h1>
			<SDKDistribution
				fragementRef={ node! }
			/>
		</div>
	)

}

const SDKCategoryLoader: React.FC = React.memo( () => {

	return (
		<React.Suspense fallback={ <SDKCategoryViewPlaceholder /> }>
			<SDKCategoryView />
		</React.Suspense>
	)
} )

export default SDKCategoryLoader

const query = graphql`
	query SDKCategoryViewQuery( $id: ID!) {
		node( id: $id ) {
			... on AndroidSdkCategory {
				name
				slug
				...SDKDistributionFragment
			}
		}
	}
`