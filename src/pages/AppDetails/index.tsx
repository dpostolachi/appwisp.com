import React from 'react'
import { graphql } from '@react-relay'
import { AppDetailsQuery } from './__generated__/AppDetailsQuery.graphql'
import { useLazyLoadQuery } from '@react-relay'
import { useLocation, useParams } from 'react-router-dom'
import { Card, CardBody, CardHeader, Divider, Image, Link, Listbox, ListboxItem } from '@nextui-org/react'
import { formatNumber } from 'pages/AppList/AppFilters'
import { ISEOPayload, useSetSEO } from 'contexts/SEOIntegration'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const AppDetailsView = React.memo( () => {

	const { pathname } = useLocation()

	const { id: rawId } = useParams<{
		id: string
	}>()

	const {
		id,
		canonical,
	} = React.useMemo( () => {
		const isAndroid = pathname.startsWith( '/app/android' )

		let useId = rawId || ''
		let useCanonical = ''

		try {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const [ _, packageName ] = atob( useId ).split( ':' )

			if ( !packageName ) {
				throw new Error( 'Invalid package name' )
			}

			useCanonical = isAndroid ? `/app/android/${ packageName }` : `/app/ios/${ packageName }`
			
		} catch ( e ) {
			const packageName = useId
			const prefix = isAndroid ? 'AndroidApp' : 'IosApp'

			useId = btoa( `${ prefix }:${ packageName }` )

			useCanonical = isAndroid ? `/app/android/${ packageName }` : `/app/ios/${ packageName }`
		}

		return {
			id: useId,
			canonical: useCanonical,
		}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ rawId ] )

	const { node } = useLazyLoadQuery<AppDetailsQuery>( query, {
		id: id!,
	} )

	const seoData: ISEOPayload = React.useMemo( () => {

		switch( node?.__typename ) {
			case 'AndroidApp': {
				return {
					title: `App Details and Information - ${ node?.playstoreData?.title } for Android | AppWisp`,
					description: `Get detailed information and insights on ${ node?.playstoreData?.title } for Android. Explore features, user data, and more on AppWisp, your trusted source for app analysis.`,
					keywords: [
						node?.playstoreData?.title || '',
						node?.playstoreData?.packageName || '',
						'Android app insights',
					],
					canonical,
				}
			}
			case 'IosApp': {
				return {
					title: `App Details and Information - ${ node?.appstoreData?.title } for iOS | AppWisp`,
					description: `Get detailed information and insights on ${ node?.appstoreData?.title } for iOS. Explore features, user data, and more on AppWisp, your trusted source for app analysis.`,
					keywords: [
						node?.appstoreData?.title || '',
						node?.appstoreData?.packageName || '',
						'iOS app insights',
					],
					canonical,
				}
			}
			default: {
				return {
					title: 'App Details | appwisp',
					description: 'Explore app details, ratings, and reviews on appwisp. Your gateway to a world of exceptional mobile experiences.',
					keywords: [
						'Android apps',
						'Android APKs',
						'Android app ratings',
						'Android app reviews',
						'Android app analysis',
					],
					canonical,
				}
			}
		}

	}, [ node, canonical ] )

	useSetSEO( seoData )

	const displayCards = React.useMemo( () => {

		let useRating: string
		let useReleased: string
		let useUpdated: string
		let useCategory: string
		let useDeveloper: string
		let useInstalls: string
		let maxInstalls: number | undefined = undefined
		let useReviewCount: number | undefined = undefined

		switch( node?.__typename ) {
			case 'AndroidApp': {
				useInstalls = formatNumber( node?.playstoreData?.maxInstalls || 0 ) || 'unknown'
				maxInstalls = node?.playstoreData?.maxInstalls || undefined
				useRating = node?.playstoreData?.score?.toFixed( 1 ) || 'unknown'
				useReviewCount = node?.playstoreData?.reviews || undefined
				useReleased = node?.playstoreData?.released && new Date( node?.playstoreData?.released ).toLocaleDateString( 'en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				} ) || 'unknown'
				useUpdated = new Date( node?.playstoreData?.updated ).toLocaleDateString( 'en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				} ) || 'unknown'
				useCategory = node?.playstoreData?.categories?.map( ( category ) => {
					return category?.name
				} ).join( ', ' ) || 'unknown'
				useDeveloper = node?.playstoreData?.developer?.name || 'unknown'
				break
			}
			case 'IosApp': {
				useInstalls = node?.appstoreData?.installs || 'unknown'
				useRating = node?.appstoreData?.score?.toFixed( 1 ) || 'unknown'
				useReviewCount = node?.appstoreData?.scoreCount || undefined
				useReleased = new Date( node?.appstoreData?.released ).toLocaleDateString( 'en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				} ) || 'unknown'
				useUpdated = new Date( node?.appstoreData?.updated ).toLocaleDateString( 'en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				} ) || 'unknown'
				useCategory = node?.appstoreData?.category?.name || 'unknown'
				useDeveloper = node?.appstoreData?.developer?.name || 'unknown'
				break
			}
			default: {
				useInstalls = 'unknown'
				useRating = 'unknown'
				useReleased = 'unknown'
				useUpdated = 'unknown'
				useCategory = 'unknown'
				useDeveloper = 'unknown'
			}
		}

		return [
			{
				label: 'Total installs',
				content: (
					<div
						className='flex flex-col gap-0'
					>
						<span>
							{ useInstalls }
						</span>
						{
							maxInstalls ? (
								<span
									className='text-sm text-default-500'
								>
									({ Intl.NumberFormat( 'en-US' ).format( maxInstalls ) })
								</span>
							) : null
						}
					</div>
				),
			},
			{
				label: 'Rating',
				content: (
					<div
						className='flex flex-row gap-1 justify-start items-center'
					>
						<span className='flex flex-row gap-1 items-center'>
							{ useRating }
							<FontAwesomeIcon
								icon={ faStar }
							/>
						</span>
						{
							useReviewCount ? (
								<span
									className='text-sm text-default-500'
								>
									({ Intl.NumberFormat( 'en-US' ).format( useReviewCount ) } reviews)
								</span>
							) : null
						}
					</div>
				),
				
			},
			{
				label: 'Released',
				content: useReleased,
			},
			{
				label: 'Last updated',
				content: useUpdated
			},
			{
				label: 'Category',
				content: useCategory,
			},
			{
				label: 'Developer',
				content: useDeveloper,
			},
		]
	}, [ node ] )

	const developerDetailsItems = React.useMemo( () => {

		let devName: string
		let devEmail: string
		let website: string
		let address: string
		let country: string

		switch( node?.__typename ) {
			case 'AndroidApp': {
				devName = node?.playstoreData?.developer?.name || 'unknown'
				devEmail = node?.playstoreData?.developerEmail || node?.playstoreData?.developer?.email || 'unknown'
				website = node?.playstoreData?.developer?.website || 'unknown'
				address = node?.playstoreData?.developer?.address || 'unknown'
				country = node?.playstoreData?.developer?.countryName || 'unknown'
				break
			}
			case 'IosApp': {
				devName = node?.appstoreData?.developer?.name || 'unknown'
				devEmail = node?.appstoreData?.developer?.playstoreDeveloper?.email || 'unknown'
				website = node?.appstoreData?.developer?.website || node?.appstoreData?.developer?.playstoreDeveloper?.website || 'unknown'
				address = node?.appstoreData?.developer?.playstoreDeveloper?.address || 'unknown'
				country = node?.appstoreData?.developer?.playstoreDeveloper?.countryName || 'unknown'
				break
			}
			default: {
				devName = 'unknown'
				devEmail = 'unknown'
				website = 'unknown'
				address = 'unknown'
				country = 'unknown'
			}
		}

		return [
			{
				label : 'Name',
				content: devName,
			},
			{
				label: 'E-mail',
				content: devEmail,
			},
			{
				label: 'Website',
				content: website,
			},
			{
				label: 'Country',
				content: country,
			},
			{
				label: 'Address',
				content: address,
			},
		]
	}, [ node ] )

	const title = React.useMemo( () => {
		switch ( node?.__typename ) {
			case 'AndroidApp': {
				return node?.playstoreData?.title || 'unknown'
			}
			case 'IosApp': {
				return node?.appstoreData?.title || 'unknown'
			}
			default: {
				return 'unknown'
			}
		}
	}, [ node ] )

	const packageName = React.useMemo( () => {
		switch( node?.__typename ) {
			case 'AndroidApp': {
				return node?.playstoreData?.packageName || 'unknown'
			}
			case 'IosApp': {
				return node?.appstoreData?.packageName || 'unknown'
			}
			default: {
				return 'unknown'
			}
		}
	}, [ node ] )

	const screenShots = React.useMemo( () => {
		switch( node?.__typename ) {
			case 'AndroidApp': {
				return node?.playstoreData?.screenshots || []
			}
			case 'IosApp': {
				return node?.appstoreData?.screenshots || []
			}
			default: {
				return []
			}
		}
	}, [ node ] )

	const htmlDescription = React.useMemo( () => {
		switch( node?.__typename ) {
			case 'AndroidApp': {
				return node?.playstoreData?.descriptionHtml || null
			}
			default: {
				return null
			}
		}
	}, [ node ] )

	const plainDescription = React.useMemo( () => {
		let description = ''

		switch( node?.__typename ) {
			case 'AndroidApp': {
				description = node?.playstoreData?.description || ''
				break
			}
			case 'IosApp': {
				description = node?.appstoreData?.description || ''
				break
			}
			default: {
				description = ''
			}
		}

		return description
			.split( '\n' )
			.map( ( part ) => part.trim() )
			.filter( ( part ) => part.length > 0 )
			.map( ( paragraph, index ) => {
				return (
					<p
						key={ index }
					>
						{ paragraph }
					</p>
				)
			} )
	}, [ node ] )

	const sdks = React.useMemo( () => {
		switch( node?.__typename ) {
			case 'AndroidApp': {
				return node?.androidSdks?.edges || []
			}
			case 'IosApp': {
				return node?.iosSdks?.edges || []
			}
			default: {
				return []
			}
		}
	}, [ node ] )

	const headerImage = React.useMemo( () => {
		switch( node?.__typename ) {
			case 'AndroidApp': {
				return node?.playstoreData?.headerImage || null
			}
			default: {
				return null
			}
		}
	}, [ node ] )

	return (
		<div
			className='flex flex-col gap-8'
		>
			<div
				className='flex flex-col gap-2'
			>
				<h1
					className='text-4xl font-bold'
				>
					{ title }
				</h1>
				<h2
					className='text-xl font-bold opacity-60'
				>
					{ packageName }
				</h2>
			</div>
			<div
				className={`
					flex flex-row overflow-x-auto
					md:grid md:grid-cols-3
					md:overflow-x-hidden
					lg:grid-cols-6
					gap-4
					snap snap-x
				`}
			>
				{
					displayCards.map( ( card, index ) => {
						return (
							<Card
								key={ index }
								shadow='none'
								className={ `
									w-64
									min-w-64
									snap-start
									md:w-auto
									md:min-w-px
								` }
							>
								<CardHeader>
									<div
										className='text-default-500 text-md'
									>
										{ card.label }
									</div>
								</CardHeader>
								<CardBody>
									<div
										className='text-default-900 text-xl'
									>
										{ card.content }
									</div>
								</CardBody>
							</Card>
						)
					} )
				}
			</div>
			<div
				className='flex gap-8 flex-col md:flex-row'
			>
				<Card
					className='w-full md:w-2/4'
					shadow='none'
				>
					<CardHeader>
						<div
							className='text-default-500 text-md'
						>
							Developer details
						</div>
					</CardHeader>
					<Divider />
					<CardBody
						className='flex flex-col gap-4'
					>
						{
							developerDetailsItems.map( ( item, index ) => {
								return (
									<div
										key={ index }
										className='flex flex-col gap-0'
									>
										<div
											className='text-default-500 text-sm'
										>
											{ item.label }
										</div>
										<div
											className='text-default-900 text-xl'
										>
											{ item.content }
										</div>
									</div>
								)
							} )
						}
					</CardBody>
				</Card>
				<Card
					className='w-full md:w-2/4'
					shadow='none'
				>
					<CardHeader>
						<div
							className='text-default-500 text-md'
						>
							{
								node?.__typename === 'AndroidApp' ? 'Android SDKs' : 'iOS SDKs'
							}
						</div>
					</CardHeader>
					<Divider />
					<CardBody>
						<Listbox>
							{
								( sdks || [] )!.map( ( edge ) => {
									return (
										<ListboxItem
											key={ edge!.node!.id! }
											value={ edge!.node!.id! }
										>
											<Link
												className="text-inherit"
												href={ `/sdk/${ edge!.node!.slug }` }
											>
												{ edge!.node!.name! }
											</Link>
										</ListboxItem>
									)
								} )
							}
						</Listbox>
					</CardBody>
				</Card>
			</div>
			{
				// Header image
				headerImage ? (
					<picture>
						<source srcSet={ headerImage.avif.url } type='image/avif' />
						<source srcSet={ headerImage.webp.url } type='image/webp' />
						<Image
							alt={ title }
							className='w-full h-96 object-cover rounded-lg'
							src={ headerImage.avif.url }
						/>
					</picture>
				) : null
			}
			{
				// Screenshots
				screenShots?.length ? (
					<>
						<h2
							className='text-2xl font-bold'
						>
							Screenshots
						</h2>
						<div
							className={ `
								flex flex-row overflow-x-auto
								md:overflow-x-hidden
								gap-4
								snap snap-x
							` }
						>
							{
								screenShots?.slice(0, 4).map( ( screenshot, index ) => (
									<div
										key={ index }
										className={ `
											w-auto
											min-w-52
											snap-start
										` }
									>
										<picture>
											<source srcSet={ screenshot.avif.url } type='image/avif' />
											<source srcSet={ screenshot.webp.url } type='image/webp' />
											<Image
												alt={ title }
												className='w-full h-96 object-cover rounded-lg object-contain shadow-xl border border-default-100'
												key={ index }
												src={ screenshot.avif.url }
											/>
										</picture>
									</div>
								) )
							}
						</div>
					</>
				) : null
			}
			<div
				className='flex flex-row gap-8'
			>
				<div
					className='w-3/4 flex flex-col gap-8'
				>
					<h2
						className='text-2xl font-bold'
					>
						Description
					</h2>
					{
						htmlDescription ? (
							<p
								dangerouslySetInnerHTML={ {
									__html: htmlDescription,
								} }
							/>
						) : (
							<div className="flex flex-col gap-4">
								{ plainDescription }
							</div>
						)
					}
				</div>
				<div>

				</div>
			</div>
		</div>
	)
} )

const AppDetailsLoader = React.memo( () => {
	return (
		<div>
			<React.Suspense fallback={ null }>
				<AppDetailsView />
			</React.Suspense>
		</div>
	)
} )

const query = graphql`
	query AppDetailsQuery($id: ID!) {
		node(id: $id) {
			__typename
			... on AndroidApp {
				playstoreData {
					packageName
					title
					maxInstalls
					score
					reviews
					headerImage {
						avif: image( format: AVIF, width: 600, height: 292 ) {
							url
						}
						webp: image( format: WEBP, width: 600, height: 292 ) {
							url
						}
					}
					description
					descriptionHtml
					released
					updated
					screenshots {
						avif: image( format: AVIF, width: 333, height: 592 ) {
							url
						}
						webp: image( format: WEBP, width: 333, height: 592 ) {
							url
						}
					}
					categories {
						name
					}
					developer {
						name
						email
						address
						website
						countryName
					}
					developerEmail
				}
				androidSdks(first: 100) {
					edges {
						node {
							id
							name
							slug
						}
					}
				}
			}
			... on IosApp {
				appstoreData {
					packageName
					title
					installs
					score
					description
					released
					updated
					scoreCount
					screenshots {
						avif: image( format: AVIF, width: 333, height: 592 ) {
							url
						}
						webp: image( format: WEBP, width: 333, height: 592 ) {
							url
						}
					}
					category {
						name
					}
					developer {
						name
						url
						website
						playstoreDeveloper {
							countryName
							address
							email
							website
						}
					}
				}
				iosSdks(first: 100) {
					edges {
						node {
							id
							name
							slug
						}
					}
				}
			}
		}
	}
`

export default AppDetailsLoader
