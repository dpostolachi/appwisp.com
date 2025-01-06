import React from 'react'
import { PreloadedQuery, VariablesOf, graphql, usePreloadedQuery, useQueryLoader } from '@react-relay'
import { useLazyLoadQuery } from '@react-relay';
import { AppTableQuery } from './__generated__/AppTableQuery.graphql';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Pagination, Link, PaginationItem, Button, Spinner } from '@nextui-org/react';
import { AppTableIosQuery, AppTableIosQuery$data } from './__generated__/AppTableIosQuery.graphql';
import { AppTableAndroidQuery, AppTableAndroidQuery$data } from './__generated__/AppTableAndroidQuery.graphql';
import AndroidTable from './AndroidTable';
import IOSTable from './IOSTable';
import { AppTableAndroidCountQuery, AppTableAndroidCountQuery$data } from './__generated__/AppTableAndroidCountQuery.graphql';
import { AppTableIosCountQuery, AppTableIosCountQuery$data } from './__generated__/AppTableIosCountQuery.graphql';
import { useLocation, useNavigate } from 'react-router-dom';
import { exportAppTableToCSV } from './exporter';
import DownloadIcon from 'assets/download.svg?react'
import styled from '@emotion/styled'

const PageSize = 25

const StyledDownloadIcon = styled( DownloadIcon )`
	width: 1.4rem;
	height: 1.4rem;
	filter: invert( 1 );
`

const AppCountLoader: React.FC<{
	gqlQuery: ReturnType<typeof graphql>;
	queryRef: PreloadedQuery<AppTableAndroidCountQuery | AppTableIosCountQuery>;
	onLoad: ( count: number ) => void;
}> = React.memo( ( {
	queryRef,
	onLoad,
	gqlQuery,
} ) => {

	const queryData = usePreloadedQuery( gqlQuery, queryRef )

	const count = React.useMemo( () => {
		return (
			( queryData as AppTableAndroidCountQuery$data ).allAndroidApps?.count ||
			( queryData as AppTableIosCountQuery$data ).allIosApps?.count || 0
		)
	}, [ queryData ] )

	React.useEffect( () => {
		onLoad( count )
	}, [ count, onLoad ] )

	return null

} )

const AppListLoader: React.FC<{
	gqlQuery: ReturnType<typeof graphql>;
	queryRef: PreloadedQuery<AppTableAndroidQuery | AppTableIosQuery>;
	onLoad: ( result: AppTableAndroidQuery$data | AppTableIosQuery$data ) => void;
}> = React.memo( ( {
	queryRef,
	onLoad,
	gqlQuery,
} ) => {

	const queryData = usePreloadedQuery( gqlQuery, queryRef )

	React.useEffect( () => {
		onLoad( queryData )
	}, [ queryData, onLoad ] )

	return null

} )

const AppTablePlaceholder: React.FC = React.memo( () => {

	return (
		<Table
			isHeaderSticky
			shadow='none'
		>
			<TableHeader>
				<TableColumn>App name</TableColumn>
				<TableColumn>Downloads</TableColumn>
				<TableColumn>Developer</TableColumn>
				<TableColumn>Category</TableColumn>
			</TableHeader>
			<TableBody>
			{
				new Array( 25 ).fill( 0 ).map( ( _, index ) => {

					return (
						<TableRow key={ `p:${ index }` }>
							<TableCell>
								<div
									className="flex flex-row gap-4 items-center"
								>
									<div className="h-5 w-60 rounded-lg bg-default-200"></div>
								</div>
							</TableCell>
							<TableCell>
								<div className="h-5 w-20 rounded-lg bg-default-200"></div>
							</TableCell>
							<TableCell>
								<div className="h-5 w-20 rounded-lg bg-default-200"></div>
							</TableCell>
							<TableCell>
								<div className="h-5 w-20 rounded-lg bg-default-200"></div>
							</TableCell>
						</TableRow>
					)

				} )
			}
			</TableBody>
		</Table>
	)

} )

const AppTableView: React.FC = React.memo( () => {

	const {
		search,
		pathname,
	} = useLocation()

	const navigate = useNavigate()

	const {
		downloads: rawDownloads,
		categories,
		query: rawQuery,
		page,
		sdks,
	} = React.useMemo( () => {
		const params = new URLSearchParams( search )

		const downloadsMin = params.get( 'downloads.min' ) || ( '1'.replace( /_/g, '' ) )
		const downloadsMax = params.get( 'downloads.max' ) || ( '25_000_000_000'.replace( /_/g, '' ) )
		const page = params.get( 'page' ) || '1'
		const categories = params.getAll( 'categories' ) || []
		const sdks = params.getAll( 'sdks' ) || []
		const query = params.get( 'query' ) || ''
		const platform = params.get( 'platform' ) || 'android'

		return {
			downloads: [
				parseInt( downloadsMin ),
				parseInt( downloadsMax ),
			] as [ number, number ],
			page: parseInt( page ),
			categories: categories.map( decodeURIComponent ),
			sdks: sdks
				.map( decodeURIComponent )
				.map( ( sdk ) => {
					try {
						const decoded = atob( sdk )
						if ( decoded.startsWith( 'AndroidSdk' ) ) {
							return sdk
						}
						return btoa( `AndroidSdk:${ sdk }` )
					} catch ( e ) {
						return btoa( `AndroidSdk:${ sdk }` )
					}
				} ),
			query,
			platform: platform as 'ios' | 'android',
		}
	}, [ search ] )

	const [ downloads, setDownloads ] = React.useState( rawDownloads )
	const [ query, setQuery ] = React.useState( rawQuery )

	const downloadsDebounceTimeout = React.useRef<NodeJS.Timeout>()
	React.useEffect( () => {
		if ( downloadsDebounceTimeout.current ) {
			clearTimeout( downloadsDebounceTimeout.current )
		}
		downloadsDebounceTimeout.current = setTimeout( () => {
			setDownloads( rawDownloads )
		}, 300 )
	}, [ rawDownloads ] )

	const queryDebounceTimeout = React.useRef<NodeJS.Timeout>()
	React.useEffect( () => {
		if ( queryDebounceTimeout.current ) {
			clearTimeout( queryDebounceTimeout.current )
		}
		queryDebounceTimeout.current = setTimeout( () => {
			setQuery( rawQuery )
		}, 300 )
	}, [ rawQuery ] )

	const platform = React.useMemo( () => {
		return pathname.startsWith( '/app/android' ) ? 'android' : 'ios'
	}, [ pathname ] )

	const offset = React.useMemo( () => {
		return ( page - 1 ) * PageSize
	}, [ page ] )

	const queryVars: VariablesOf<AppTableQuery> = React.useMemo( () => {
		return {
			minInstalls: downloads[0],
			maxInstalls: downloads[1],
			categories: categories,
			query: query,
			first: PageSize,
			sdks: sdks,
			after: offset ? btoa( `arrayconnection:${ offset }` ) : undefined,
		}
	}, [ downloads, categories, query, offset, sdks ] )
	const initQueryVars = React.useMemo( () => {
		return queryVars
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [] )

	const countQueryVars: VariablesOf<AppTableAndroidCountQuery | AppTableIosCountQuery> = React.useMemo( () => {
		return {
			minInstalls: downloads[0],
			maxInstalls: downloads[1],
			categories: categories,
			query: query,
			sdks: sdks,
		}
	}, [ downloads, categories, query, sdks ] )

	const useQuery = React.useMemo( () => {
		return platform === 'ios' ? iosQuery : androidQuery
	}, [ platform ] )

	const useCountQuery = React.useMemo( () => {
		return platform === 'ios' ? iosCountQuery : androidCountQuery
	}, [ platform ] )

	const [ countQueryRef, loadCountQuery ] = useQueryLoader<AppTableAndroidCountQuery | AppTableIosCountQuery>( useCountQuery )

	React.useEffect( () => {
		loadCountQuery( countQueryVars )
	}, [ countQueryVars, loadCountQuery ] )

	const [ listQueryRef, loadListQuery ] = useQueryLoader<AppTableAndroidQuery | AppTableIosQuery>( useQuery )
	React.useEffect( () => {
		loadListQuery( queryVars )
	}, [ loadListQuery, queryVars ] )

	const result = useLazyLoadQuery<AppTableAndroidQuery | AppTableIosQuery>( useQuery, initQueryVars )
	const [ listResult, setListResult ] = React.useState( result )
	const useList = React.useMemo( () => {
		return ( listResult as AppTableAndroidQuery$data ).allAndroidApps || ( listResult as AppTableIosQuery$data ).allIosApps
	}, [ listResult ] )

	const [ count, setCount ] = React.useState( 0 )

	const totalPages = Math.ceil( ( count || 0 ) / PageSize )

	const getUrl = React.useCallback( ( page: number | 'prev' | 'next' ) => {
		const params = new URLSearchParams( search )
		const currentPage = parseInt( params.get( 'page' ) || '1' )
		if ( page === 'prev' ) {
			params.set( 'page', ( currentPage - 1 ).toString() )
		} else if ( page === 'next' ) {
			params.set( 'page', ( currentPage + 1 ).toString() )
		} else {
			params.set( 'page', page.toString() )
		}
		return `${ pathname }?${ params.toString() }`
	}, [ search, pathname ] )

	const handlePageChange = React.useCallback( ( page: number ) => {
		setTimeout( () => {
			const params = new URLSearchParams( search )
			params.set( 'page', page.toString() )
			navigate( `${ pathname }?${ params.toString() }` )
			const appTable = document.querySelector( '#app-table' )
			if ( appTable ) {
				appTable.scrollIntoView( { behavior: 'smooth', block: 'start' } )
			}
		}, 200 )
	}, [ search, pathname, navigate ] )

	const [ pending, setPending ] = React.useState( false )
	const currentExport = React.useRef<Promise<void>>()
	const [ exportCount, setExportCount ] = React.useState( 0 )

	const handleOnProgress = React.useCallback( ( progress: number ) => {
		setExportCount( progress )
	}, [] )

	const handleExport = React.useCallback( () => {
		setPending( true )
		const promise = exportAppTableToCSV( handleOnProgress, platform, categories, sdks, query, downloads[0], downloads[1] )
		currentExport.current = promise
		currentExport.current.finally( () => {
			if ( currentExport.current === promise ) {
				setPending( false )
			}
		} )
	}, [
		handleOnProgress,
		platform,
		categories,
		sdks,
		query,
		downloads,
	] )

	return (
		<>
			<React.Suspense
				fallback={ null }
			>
				{
					countQueryRef ? (
						<AppCountLoader
							gqlQuery={ useCountQuery }
							queryRef={ countQueryRef }
							onLoad={ setCount }
						/>
					) : null
				}
			</React.Suspense>
			<React.Suspense
				fallback={ null }
			>
				{
					listQueryRef ? (
						<AppListLoader
							gqlQuery={ useQuery }
							queryRef={ listQueryRef }
							onLoad={ setListResult }
						/>
					) : null
				}
			</React.Suspense>
			<div
				className="flex flex-col gap-8"
			>
				<div className="flex flex-row justify-end">
					<Button
						variant='solid'
						color='primary'
						disabled={ pending }
						className={
							pending ? 'px-4 flex flex-row gap-2 items-center 	cursor-not-allowed'
								: 'px-4 flex flex-row gap-2 items-center'
						}
						onClick={ handleExport }
					>
						{
							pending ? (
								<>
									<Spinner size='sm' color='white' />
									Exporting
									<span
										className='opacity-50'
									>
										({ exportCount })
									</span>
								</>
							) : (
								<>
									<StyledDownloadIcon />
									Export to CSV
								</>
							)
						}
					</Button>
				</div>
				{
					useList?.__typename === 'AndroidAppConnection' ? (
						<AndroidTable
							listRef={ useList }
						/>
					) : useList?.__typename === 'IosAppConnection' ? (
						<IOSTable
							listRef={ useList }
						/>
					) : null
				}
				<div
					className="flex flex-wrap gap-4 items-center"
				>
					<Pagination
						showControls
						className="w-full flex justify-center"
						page={ page }
						key={ totalPages }
						total={ totalPages }
						onChange={ handlePageChange }
						renderItem={ ( props ) => {
							const { value, key, className, ...rest } = props

							return (
								<PaginationItem
									key={ key }
									as={ Link }
									value={ value }
									className={ className }
									href={ getUrl( value as unknown as number ) }
									{ ...rest }
								/>
							)
						} }
					/>
				</div>
			</div>
		</>
	)

} )

const AppTableLoader: React.FC = React.memo( () => {

	return (
		<React.Suspense
			fallback={ <AppTablePlaceholder /> }				
		>
			<AppTableView
			/>
		</React.Suspense>
	)

} )

export default AppTableLoader

const iosQuery = graphql`
	query AppTableIosQuery(
		$minInstalls: Int,
		$maxInstalls: Int,
		$first: Int!,
		$after: String,
		$categories: [String!],
		$query: String,
		$sdks: [String!],
	) {
		allIosApps(
			minInstalls: $minInstalls,
			maxInstalls: $maxInstalls,
			categories: $categories,
			sdks: $sdks,
			query: $query,
			sort: [
				{
					field: MAX_INSTALLS,
					direction: DESC,
				}
			],
			first: $first,
			after: $after,
		) {
			__typename
			...IOSTableFragment
		}
	}
`

const iosCountQuery = graphql`
	query AppTableIosCountQuery(
		$minInstalls: Int,
		$maxInstalls: Int,
		$categories: [String!],
		$query: String,
		$sdks: [String!],
	) {
		allIosApps(
			minInstalls: $minInstalls,
			maxInstalls: $maxInstalls,
			categories: $categories,
			sdks: $sdks,
			query: $query,
			first: 0,
		) {
			count
		}
	}
`

const androidQuery = graphql`
	query AppTableAndroidQuery(
		$minInstalls: Int,
		$maxInstalls: Int,
		$first: Int!,
		$after: String,
		$categories: [String!],
		$query: String,
		$sdks: [String!],
	) {
		allAndroidApps(
			minInstalls: $minInstalls,
			maxInstalls: $maxInstalls,
			categories: $categories,
			sdks: $sdks,
			query: $query,
			sort: [
				{
					field: MAX_INSTALLS,
					direction: DESC,
				}
			],
			first: $first,
			after: $after,
		) {
			__typename
			...AndroidTableFragment
		}
	}
`

const androidCountQuery = graphql`
	query AppTableAndroidCountQuery(
		$minInstalls: Int,
		$maxInstalls: Int,
		$categories: [String!],
		$query: String,
		$sdks: [String!],
	) {
		allAndroidApps(
			minInstalls: $minInstalls,
			maxInstalls: $maxInstalls,
			categories: $categories,
			sdks: $sdks,
			query: $query,
			first: 0,
		) {
			count
		}
	}
`