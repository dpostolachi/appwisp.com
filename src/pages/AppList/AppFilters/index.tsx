import { Accordion, AccordionItem, Card, CardBody, Selection, Slider } from '@nextui-org/react'
import React from 'react'
import AppFiltersCategories, { AppFiltersCategoriesPlaceholder } from './AppFiltersCategories'
import AppFiltersSource from './AppFiltersSource'
import AppFiltersSDKs from './AppFiltersSDKs'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { graphql, useLazyLoadQuery } from '@react-relay'
import { AppFiltersQuery } from './__generated__/AppFiltersQuery.graphql'
import { ISEOPayload, useSetSEO } from 'contexts/SEOIntegration'


const getPageSEO = ( platform: string, categories: string[], sdks: string[] ): ISEOPayload => {
	if ( !categories.length && !sdks.length ) {
		const title = platform === 'android' ? 'Browse Top Android Apps - App Explorer | AppWisp'
			: 'Browse Top iOS Apps - App Explorer | AppWisp'
		const description = platform === 'android' ? 'Discover the best Android apps. Our curated app list includes top-rated Android apps across various categories. Find your next favorite Android app on AppWisp.'
			: 'Discover the best iOS apps. Our curated app list includes top-rated iOS apps across various categories. Find your next favorite iOS app on AppWisp.'
		const keywords = platform === 'android' ? 'top iOS apps, iOS app list, best iOS apps, iOS app categories, app discovery, AppWisp'.split( ', ' )
			: 'top Android apps, Android app list, best Android apps, Android app categories, app discovery, AppWisp'.split( ', ' )

		return {
			title,
			description,
			keywords,
		}
	}

	let title = platform === 'android' ? 'Top iOS Apps' : 'Top Android Apps'
	let description = 'Explore top iOS apps'
	if ( categories.length ) {
		title = `${ title } in ${ categories.join( ', ' ) }`
		description += ' in ' + categories.join( ', ' )
	}

	if ( sdks.length ) {
		title = `${ title } with ${ sdks.join( ', ' ) }`
		description += ' that utilizes ' + sdks.join( ', ' )
	}

	title += ' - App Explorer | AppWisp'
	const keywords = [ ...categories, ...sdks, 'app discovery', 'AppWisp' ]
	return {
		title,
		description,
		keywords,
	}
}

// eslint-disable-next-line react-refresh/only-export-components
export const formatNumber = ( value: number ) => {
	if ( value < 1_000 ) {
		return value.toString()
	}
	if ( value < 1_000_000 ) {
		return `${ ( Math.floor( value / 1_00 ) / 10 ).toFixed(1) }K`
	}
	if ( value < 1_000_000_000 ) {
		return `${ ( Math.floor( value / 1_000_00 ) / 10 ).toFixed( 1 ) }M`
	}
	if ( value < 1_000_000_000_000 ) {
		return `${ ( Math.floor( value / 1_000_000_00 ) / 10 ).toFixed( 1 ) }B`
	}
	return `${ Math.floor( value / 1_000_000 ) }M`
}


const createLogScale = ( min: number, max: number, steps: number ) => {
	return ( value: number ) => {
		const minLog = Math.log( min )
		const maxLog = Math.log( max )


		const scale = ( maxLog - minLog ) / steps
		return Math.floor( Math.exp( minLog + scale * value ) )
	}
}
const reverseLogScale = ( min: number, max: number, steps: number ) => {
	return ( value: number ) => {
		const minLog = Math.log( min )
		const maxLog = Math.log( max )

		const scale = ( maxLog - minLog ) / steps
		return Math.floor( ( Math.log( value ) - minLog ) / scale )
	}
}

const logScale = createLogScale( 1, 25_000_000_000, 100 )
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const revScale = reverseLogScale( 1, 25_000_000_000, 100 )

const AppFilters: React.FC = React.memo( () => {

	const queryData = useLazyLoadQuery<AppFiltersQuery>( query, {} )

	const {
		search,
	} = useLocation()

	const {
		platform,
	} = useParams<{
		platform: string
	}>()

	const categories = React.useMemo( () => {
		const params = new URLSearchParams( search )
		return  ( params.getAll( 'categories' ) || [] ).map( decodeURIComponent )
	}, [ search ] )

	const sdks = React.useMemo( () => {
		const params = new URLSearchParams( search )
		return ( params.getAll( 'sdks' ) || [] ).map( decodeURIComponent )
	}, [ search ] )

	const {
		allAndroidSdksCategories,
		allAppstoreCategories,
		allPlaystoreCategories,
	} = queryData

	const allSdks = React.useMemo( () => {
		return ( allAndroidSdksCategories?.edges || [] )
			.reduce( ( acc, edge ) => {
				const node = edge!.node!;
				( node.androidSdks?.edges || [] )
					.forEach( ( edge ) => {
						const sdk = edge!.node!
						acc.push( sdk )
					} )
				return acc
			}, [] as {
				name: string
				slug: string,
				id: string,
			}[] )
	}, [ allAndroidSdksCategories ] )

	const allIosCategories = React.useMemo( () => {
		return ( allAppstoreCategories?.edges || [] )
			.map( ( edge ) => edge!.node! )
	}, [ allAppstoreCategories ] )

	const allAndroidCategories = React.useMemo( () => {
		return ( allPlaystoreCategories?.edges || [] )
			.map( ( edge ) => edge!.node! )
	}, [ allPlaystoreCategories ] )

	const pageSEO = React.useMemo( () => {
		const searchCategories = platform === 'android' ? allAndroidCategories : allIosCategories
		const foundCategories = searchCategories
			.filter( ( category ) => categories.includes( category.id ) )
			.map( ( category ) => category.name )
		const foundSdks = allSdks
			.filter( ( sdk ) => sdks.includes( sdk.id ) || sdks.includes( sdk.slug ) )
			.map( ( sdk ) => sdk.name )

		return getPageSEO( platform!, foundCategories, foundSdks )
	}, [ platform, categories, sdks, allAndroidCategories, allIosCategories, allSdks ] )

	useSetSEO( pageSEO )

	return (
		<Accordion
			defaultSelectedKeys={ [ 'categories' ]}
		>
			<AccordionItem
				key="categories"
				subtitle={ (
					<span
						className='text-base md:text-md text-default-900'
					>
						Categories
						{
							categories.length ? (
								<span
									className='text-xs md:text-sm text-default-500'
								>
									{ ` (${ categories.length })` }
								</span>
							) : null
						}
					</span>
				) }
			>
				<AppFiltersCategories
					fragmentRef={ queryData }
				/>
			</AccordionItem>
			<AccordionItem
				key="sdks"
				subtitle={ (
					<span
						className='text-base md:text-md text-default-900'
					>
						SDKs
						{
							sdks.length ? (
								<span
									className='text-xs md:text-sm text-default-500'
								>
									{ ` (${ sdks.length })` }
								</span>
							) : null
						}
					</span>
				) }
			>
				<AppFiltersSDKs
					fragmentRef={ queryData }
				/>
			</AccordionItem>
		</Accordion>
	)

} )

const AppFiltersLoader: React.FC = React.memo( () => {

	const [ accOpen, setAccOpen ] = React.useState( true )
	const [ mobileAccOpen, setMobileAccOpen ] = React.useState( false )
	const selectedKeys = React.useMemo( () => {
		return accOpen ? [ 'open' ] : []
	}, [ accOpen ] )
	const selectedMobileKeys = React.useMemo( () => {
		return mobileAccOpen ? [ 'open' ] : []
	}, [ mobileAccOpen ] )

	const handleSelectionChange = React.useCallback( ( keys: Selection ) => {
		if ( keys === 'all' ) {
			setAccOpen( true )
			return
		}
		setAccOpen( keys.has( 'open' ) )
	}, [] )

	const handleMobileSelectionChange = React.useCallback( ( keys: Selection ) => {
		if ( keys === 'all' ) {
			setMobileAccOpen( true )
			return
		}
		setMobileAccOpen( keys.has( 'open' ) )
	}, [] )

	const {
		search,
	} = useLocation()

	const navigate = useNavigate()

	const downloads = React.useMemo( () => {
		const params = new URLSearchParams( search )
		const downloadsMin = params.get( 'downloads.min' )
		const downloadsMax = params.get( 'downloads.max' )

		return [
			downloadsMin ? parseInt( downloadsMin ) : 1,
			downloadsMax ? parseInt( downloadsMax ) : 25_000_000_000,
		] as [ number, number ]
	}, [ search ] )

	const displayValue = React.useMemo( () => {
		return downloads.map( revScale ) as [ number, number ]
	}, [ downloads ] )

	const handleDownloadsChange = React.useCallback( ( value: number | number[] ) => {
		if ( Array.isArray( value ) ) {
			const downloads = ( value as [ number, number ] ).map( logScale ) as [ number, number ]
			const params = new URLSearchParams( search )
			params.set( 'downloads.min', downloads[0].toString() )
			params.set( 'downloads.max', downloads[1].toString() )
			params.set( 'page', '1' )
			navigate(
				`${ window.location.pathname }?${ params.toString() }`,
				{
					replace: true,
				}
			)

			return
		}
	}, [ search, navigate ] )

	return (
		<Card
			shadow='none'
		>
			<CardBody
				className="flex flex-col gap-4"
			>
				<div
					className="hidden md:flex"
				>
					<Accordion
						selectedKeys={ selectedKeys }
						onSelectionChange={ handleSelectionChange }
					>
						<AccordionItem
							key="open"
							subtitle={
								(
									<span
										className='text-base md:text-md text-default-900'
									>
										App filters
									</span>
								)
							}
						>
							<div
								className='flex flex-col gap-8 overflow-hidden'
							>
								<AppFiltersSource
								/>
								<Slider 
									label="Downloads"
									step={ 1 } 
									minValue={ 0 } 
									maxValue={ 100 } 
									value={ displayValue }
									// eslint-disable-next-line @typescript-eslint/no-explicit-any
									onChange={ handleDownloadsChange as any }
									className="max-w-md"
									renderValue={ ( { children } ) => {
										return ( children as string )
											.split( '–' ) // not a regular dash
											.map( Number )
											.map( logScale )
											.map( formatNumber )
											.join( ' - ' )
									} }
								/>
								<React.Suspense
									fallback={ <AppFiltersCategoriesPlaceholder /> }
								>
									<AppFilters />
								</React.Suspense>
							</div>
						</AccordionItem>
					</Accordion>
				</div>
				<div
					className="md:hidden"
				>
					<Accordion
							selectedKeys={ selectedMobileKeys }
							onSelectionChange={ handleMobileSelectionChange }
					>
						<AccordionItem
							key="open"
							subtitle={
								(
									<span
										className='text-base md:text-md text-default-900'
									>
										App filters
									</span>
								)
							}
						>
							<div
								className='flex flex-col gap-8 overflow-hidden'
							>
								<AppFiltersSource
								/>
								<Slider 
									label="Downloads"
									step={ 1 } 
									minValue={ 0 } 
									maxValue={ 100 } 
									value={ displayValue }
									// eslint-disable-next-line @typescript-eslint/no-explicit-any
									onChange={ handleDownloadsChange as any }
									className="max-w-md"
									renderValue={ ( { children } ) => {
										return ( children as string )
											.split( '–' ) // not a regular dash
											.map( Number )
											.map( logScale )
											.map( formatNumber )
											.join( ' - ' )
									} }
								/>
								<React.Suspense
									fallback={ <AppFiltersCategoriesPlaceholder /> }
								>
									<AppFilters />
								</React.Suspense>
							</div>
						</AccordionItem>
					</Accordion>
				</div>
			</CardBody>
		</Card>
	)
} )

export default AppFiltersLoader

const query = graphql`
	query AppFiltersQuery {
		...AppFiltersCategoriesFragment
		...AppFiltersSDKsFragment
		allPlaystoreCategories(first: 99) {
			edges {
				node {
					id
					name
				}
			}
		}
		allAppstoreCategories(first: 99) {
			edges {
				node {
					id
					name
				}
			}
		}
		allAndroidSdksCategories(first: 99) {
			edges {
				node {
					id
					name
					androidSdks(first: 99) {
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
	}
`
