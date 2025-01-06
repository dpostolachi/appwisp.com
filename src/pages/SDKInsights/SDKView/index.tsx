import { graphql, useFragment, useLazyLoadQuery } from '@react-relay'
import React from 'react'
import { useParams } from 'react-router-dom'
import { SDKViewQuery } from './__generated__/SDKViewQuery.graphql'
import { formatNumber } from 'pages/AppList/AppFilters'
import { Card, CardBody, CardHeader, Image, Link, Listbox, ListboxItem, Spinner } from '@nextui-org/react'
import { ISEOPayload, useSetSEO } from 'contexts/SEOIntegration'
import { SDKViewRankFragment$key } from './__generated__/SDKViewRankFragment.graphql'
import { SDKViewStatsFragment$key } from './__generated__/SDKViewStatsFragment.graphql'


const PlaceholderList = React.memo( () => {

    const items = React.useMemo( () => {
        return new Array( 10 ).fill( 0 )
    }, [] )

    return (
        <Listbox>
            {
                items.map( ( _, index ) => {
                    return (
                        <ListboxItem
                            key={ index }
                            value={ index }
                        >
                            <div
                                className="flex flex-row gap-4 items-center"
                            >
                                <Image
                                    crossOrigin='anonymous'
                                    shadow="sm"
                                    radius="lg"
                                    alt=''
                                    className='w-8 h-8 min-w-8 min-h-8'
                                    src=''
                                />
                                <div className="h-5 w-60 rounded-lg bg-default-200"></div>
                            </div>
                        </ListboxItem>
                    )
                } )
            }
        </Listbox>
    )
} )

const SDKView: React.FC = React.memo( () => {

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
            if ( decoded.startsWith( 'AndroidSdk' ) ) {
                return rawId
            }
            return btoa( `AndroidSdk:${ rawId }` )
        } catch ( e ) {
            const decoded = `AndroidSdk:${ rawId }`
            return btoa( decoded )
        }
    }, [ id ] )

    const {
        node,
    } = useLazyLoadQuery<SDKViewQuery>( query, {
        id: useId,
    } )

    const rankResponse = useFragment( rankFragment, node as SDKViewRankFragment$key )
    const statsResponse = useFragment( statsFragment, node as SDKViewStatsFragment$key )

    const sdkId = node?.id

    const seoData: ISEOPayload = React.useMemo( () => {
        return {
            title: `${ node?.name } SDK Insights | appwisp`,
            description: `Insights into the SDK: ${ node?.name }, Rankings, Usage, Popular Apps, Latest Apps, and more.`,
            keywords: [
                `${ node?.name } Android SDK`,
                `${ node?.name } Android SDK insights`,
                `${ node?.name } Android SDK usage`,
                `${ node?.name } iOS SDK`,
                `${ node?.name } iOS SDK insights`,
                `${ node?.name } iOS SDK usage`,
            ],
            canonical: `/sdk/${ node?.slug }`
        }
    }, [ node ] )

    useSetSEO( seoData )

    const displayCards = React.useMemo( () => {

        return [
            {
                label: 'Android Apps using SDK',
                content: !statsResponse ? (
                    <div className="h-5 w-30 rounded-lg bg-default-200"></div>
                ) : (
                    <div className='flex flex-col gap-1'>
                        { formatNumber( statsResponse?.androidPopularApps?.count || 0 ) }
                        {
                            statsResponse?.androidPopularApps?.count ? (
                                <Link
                                    href={ `/app/android/list?sdks=${ encodeURIComponent( node?.slug || '' ) }` }
                                    className='text-primary-500 text-sm'
                                >
                                    View apps
                                </Link>
                            ) : null
                        }
                    </div>
                )
            },
            {
                label: 'iOS Apps using SDK',
                content: !statsResponse ? (
                    <div className="h-5 w-30 rounded-lg bg-default-200"></div>
                ) : (
                    <div className='flex flex-col gap-1'>
                        { formatNumber( statsResponse?.iosPopularApps?.count || 0 ) }
                        {
                            statsResponse?.iosPopularApps?.count ? (
                                <Link
                                    href={ `/app/ios/list?sdks=${ encodeURIComponent( node?.slug || '' ) }` }
                                    className='text-primary-500 text-sm'
                                >
                                    View apps
                                </Link>
                            ) : null
                        }
                    </div>
                )
            },
            {
                label: 'Rank',
                content: !rankResponse ? (
                    <div className="h-5 w-30 rounded-lg bg-default-200"></div>
                ) : (
                    <>
                        {
                            ( rankResponse?.categories?.edges || [] ).map( edge => {
                                const node = edge?.node
                                const categoryName = edge?.node?.name || ''
                                const sortedSDKs = ( node?.androidSdks?.edges || [] ).map( ( edge ) => edge!.node! )
                                    .sort( ( a, b ) => {
                                        const totalB = ( b!.androidApps?.count || 0 ) + ( b!.iosApps?.count || 0 )
                                        const totalA = ( a!.androidApps?.count || 0 ) + ( a!.iosApps?.count || 0 )
                                        return totalB - totalA
                                    } )
                                
                                const index = sortedSDKs.findIndex( skd => skd.id === sdkId )

                                if ( index === -1 ) {
                                    return null
                                }

                                return `#${ index + 1 } in ${ categoryName }`
                            } )
                            .filter( ( cat ) => cat )
                            .map( ( label ) => {
                                return (
                                    <div>{ label }</div>
                                )
                            } )
                        }
                    </>
                )
            },
            {
                label: 'Website',
                content: node?.website ? (
                    <Link
                        target='_blank'
                        rel='noreferrer'
                        href={ node?.website }
                    >
                        { node?.website }
                    </Link>
                ) : 'unknown'
            },
        ]

    }, [ statsResponse, rankResponse, id, node, sdkId ] )

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
                    { node?.name }
                </h1>
                <p>
                    { node?.description }
                </p>
            </div>
            <div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'
            >
                {
                    displayCards.map( ( card, index ) => {

                        return (
                            <Card  
								key={ index }
                                shadow='none'
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
            <div className='flex flex-col md:flex-row gap-4'>
                <div
                    className='w-full md:w-1/2 flex flex-col gap-4'
                >
                    <h3
                        className='text-2xl text-default-500'
                    >
                        Most popular Android apps
                    </h3>
                    <div
                        className='w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4'
                    >
                        {
                            !statsResponse ? (
                                <PlaceholderList />
                            ) : (
                                <Listbox>
                                    {
                                        ( statsResponse?.androidPopularApps?.edges || [] ).length ? (
                                            ( statsResponse?.androidPopularApps?.edges || [] ).map( ( edge, index ) => {
                                                const node = edge!.node!
                                                return (
                                                    <ListboxItem
                                                        key={ index }
                                                        as={ Link }
                                                        href={ `/app/android/${ node?.packageName }` }
                                                        showDivider
                                                    >
                                                        <div
                                                            className='flex flex-col gap-2'
                                                        >
                                                            <div
                                                                className="flex flex-row gap-4 items-center"
                                                            >
                                                                <picture>
                                                                    <source srcSet={ node?.playstoreData?.icon?.avif.url } type="image/avif" />
                                                                    <source srcSet={ node?.playstoreData?.icon?.webp.url } type="image/webp" />
                                                                    <Image
                                                                        shadow="sm"
                                                                        radius="lg"
                                                                        alt={ node?.playstoreData?.title || '' }
                                                                        className='w-8 h-8 min-w-8 min-h-8'
                                                                        src={ node?.playstoreData?.icon?.avif.url }
                                                                    />
                                                                </picture>
                                                                <div
                                                                    className='text-default-900 text-lg'
                                                                >
                                                                    { node?.playstoreData?.title }
                                                                </div>
                                                            </div>
                                                            <div className='flex flex-row gap-4'>
                                                                <div className='flex flex-col'>
                                                                    <div
                                                                        className='text-default-500 text-sm'
                                                                    >
                                                                        Released
                                                                    </div>
                                                                    <div
                                                                        className='text-default-900 text-sm'
                                                                    >
                                                                        {
                                                                            node?.playstoreData?.released ? new Date( node?.playstoreData?.released ).toLocaleDateString( 'en-US', {
                                                                                year: 'numeric',
                                                                                month: 'long',
                                                                                day: 'numeric',
                                                                            } ) : 'unknown'
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className='flex flex-col'>
                                                                    <div
                                                                        className='text-default-500 text-sm'
                                                                    >
                                                                        Downloads
                                                                    </div>
                                                                    <div
                                                                        className='text-default-900 text-sm'
                                                                    >
                                                                        {
                                                                            node?.playstoreData?.installs || 'unknown'
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </ListboxItem>
                                                )
                                            } )
                                        ) : (
                                            <ListboxItem
                                                key='none'
                                            >
                                                No recent apps
                                            </ListboxItem>
                                        )
                                    }                                
                                </Listbox>
                            )
                        }               
                    </div>
                </div>
                <div
                    className='w-full md:w-1/2 flex flex-col gap-4'
                >
                    <h3
                        className='text-2xl text-default-500'
                    >
                        Most popular iOS apps
                    </h3>
                    <div
                        className='w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4'
                    >
                        {
                            !statsResponse ? (
                                <PlaceholderList />
                            ) : (
                                <Listbox>
                                    {
                                        ( statsResponse?.iosPopularApps?.edges || [] ).length ? (
                                            ( statsResponse?.iosPopularApps?.edges || [] ).map( ( edge, index ) => {
                                                const node = edge!.node!
                                                return (
                                                    <ListboxItem
                                                        key={ index }
                                                        as={ Link }
                                                        href={ `/app/ios/${ node?.packageName }` }
                                                        showDivider
                                                    >
                                                        <div
                                                            className='flex flex-col gap-2'
                                                        >
                                                            <div
                                                                className="flex flex-row gap-4 items-center"
                                                            >
                                                                <picture>
                                                                    <source srcSet={ node?.appstoreData?.icon?.avif.url } type="image/avif" />
                                                                    <source srcSet={ node?.appstoreData?.icon?.webp.url } type="image/webp" />
                                                                    <Image
                                                                        shadow="sm"
                                                                        radius="lg"
                                                                        alt={ node?.appstoreData?.title || '' }
                                                                        className='w-8 h-8 min-w-8 min-h-8'
                                                                        src={ node?.appstoreData?.icon?.avif.url }
                                                                    />
                                                                </picture>
                                                                <div
                                                                    className='text-default-900 text-lg'
                                                                >
                                                                    { node?.appstoreData?.title }
                                                                </div>
                                                            </div>
                                                            <div className='flex flex-row gap-4'>
                                                                <div className='flex flex-col'>
                                                                    <div
                                                                        className='text-default-500 text-sm'
                                                                    >
                                                                        Released
                                                                    </div>
                                                                    <div
                                                                        className='text-default-900 text-sm'
                                                                    >
                                                                        {
                                                                            node?.appstoreData?.released ? new Date( node?.appstoreData?.released ).toLocaleDateString( 'en-US', {
                                                                                year: 'numeric',
                                                                                month: 'long',
                                                                                day: 'numeric',
                                                                            } ) : 'unknown'
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className='flex flex-col'>
                                                                    <div
                                                                        className='text-default-500 text-sm'
                                                                    >
                                                                        Downloads
                                                                    </div>
                                                                    <div
                                                                        className='text-default-900 text-sm'
                                                                    >
                                                                        {
                                                                            node?.appstoreData?.installs || 'unknown'
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </ListboxItem>
                                                )
                                            } )
                                        ) : (
                                            <ListboxItem
                                                key='none'
                                            >
                                                No recent apps
                                            </ListboxItem>
                                        )
                                    }                                
                                </Listbox>
                            )
                        }               
                    </div>
                </div>
            </div>
            <div
                className='flex flex-col md:flex-row gap-4'
            >
                <div
                    className='w-full md:w-1/2'
                >
                    <h3
                        className='text-2xl text-default-500'
                    >
                        Most recent Android apps
                    </h3>
                    <div
                        className='w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4'
                    >
                        {
                            !statsResponse ? (
                                <PlaceholderList />
                            ) : (
                                <Listbox>
                                    {
                                        ( statsResponse?.androidLatestApps?.edges || [] ).length ? (
                                            ( statsResponse?.androidLatestApps?.edges || [] ).map( ( edge, index ) => {
                                                const node = edge!.node!
                                                return (
                                                    <ListboxItem
                                                        key={ index }
                                                        as={ Link }
                                                        href={ `/app/android/${ node?.packageName }` }
                                                        className='gap-4'
                                                        showDivider
                                                    >
                                                        <div
                                                            className='flex flex-col gap-2'
                                                        >
                                                            <div
                                                                className="flex flex-row gap-4 items-center"
                                                            >
                                                                <picture>
                                                                    <source srcSet={ node?.playstoreData?.icon?.avif.url } type="image/avif" />
                                                                    <source srcSet={ node?.playstoreData?.icon?.webp.url } type="image/webp" />
                                                                    <Image
                                                                        shadow="sm"
                                                                        radius="lg"
                                                                        alt={ node?.playstoreData?.title || '' }
                                                                        className='w-8 h-8 min-w-8 min-h-8'
                                                                        src={ node?.playstoreData?.icon?.avif.url }
                                                                    />
                                                                </picture>
                                                                <div
                                                                    className='text-default-900 text-lg'
                                                                >
                                                                    { node?.playstoreData?.title }
                                                                </div>
                                                            </div>
                                                            <div className='flex flex-row gap-4'>
                                                                <div className='flex flex-col'>
                                                                    <div
                                                                        className='text-default-500 text-sm'
                                                                    >
                                                                        Released
                                                                    </div>
                                                                    <div
                                                                        className='text-default-900 text-sm'
                                                                    >
                                                                        {
                                                                            node?.playstoreData?.released ? new Date( node?.playstoreData?.released ).toLocaleDateString( 'en-US', {
                                                                                year: 'numeric',
                                                                                month: 'long',
                                                                                day: 'numeric',
                                                                            } ) : 'unknown'
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className='flex flex-col'>
                                                                    <div
                                                                        className='text-default-500 text-sm'
                                                                    >
                                                                        Downloads
                                                                    </div>
                                                                    <div
                                                                        className='text-default-900 text-sm'
                                                                    >
                                                                        {
                                                                            node?.playstoreData?.installs || 'unknown'
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </ListboxItem>
                                                )
                                            } )
                                        ) : (
                                            <ListboxItem
                                                key='none'
                                            >
                                                No recent apps
                                            </ListboxItem>
                                        )
                                    }                                
                                </Listbox>
                            )
                        }
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <h3
                        className='text-2xl text-default-500'
                    >
                        Most recent iOS apps
                    </h3>
                    <div
                        className='w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4'
                    >
                        {
                            !statsResponse ? (
                                <PlaceholderList />
                            ) : (
                                <Listbox>
                                    {
                                        ( statsResponse?.iosLatestApps?.edges || [] ).length ? (
                                            ( statsResponse?.iosLatestApps?.edges || [] ).map( ( edge, index ) => {
                                                const node = edge!.node!
                                                return (
                                                    <ListboxItem
                                                        key={ index }
                                                        as={ Link }
                                                        href={ `/app/ios/${ node?.packageName }` }
                                                        className='gap-4'
                                                        showDivider
                                                    >
                                                        <div
                                                            className='flex flex-col gap-2'
                                                        >
                                                            <div
                                                                className="flex flex-row gap-4 items-center"
                                                            >
                                                                <picture>
                                                                    <source srcSet={ node?.appstoreData?.icon?.avif.url } type="image/avif" />
                                                                    <source srcSet={ node?.appstoreData?.icon?.webp.url } type="image/webp" />
                                                                    <Image
                                                                        shadow="sm"
                                                                        radius="lg"
                                                                        alt={ node?.appstoreData?.title || '' }
                                                                        className='w-8 h-8 min-w-8 min-h-8'
                                                                        src={ node?.appstoreData?.icon?.avif.url }
                                                                    />
                                                                </picture>
                                                                <div
                                                                    className='text-default-900 text-lg'
                                                                >
                                                                    { node?.appstoreData?.title }
                                                                </div>
                                                            </div>
                                                            <div className='flex flex-row gap-4'>
                                                                <div className='flex flex-col'>
                                                                    <div
                                                                        className='text-default-500 text-sm'
                                                                    >
                                                                        Released
                                                                    </div>
                                                                    <div
                                                                        className='text-default-900 text-sm'
                                                                    >
                                                                        {
                                                                            node?.appstoreData?.released ? new Date( node?.appstoreData?.released ).toLocaleDateString( 'en-US', {
                                                                                year: 'numeric',
                                                                                month: 'long',
                                                                                day: 'numeric',
                                                                            } ) : 'unknown'
                                                                        }
                                                                    </div>
                                                                </div>
                                                                <div className='flex flex-col'>
                                                                    <div
                                                                        className='text-default-500 text-sm'
                                                                    >
                                                                        Downloads
                                                                    </div>
                                                                    <div
                                                                        className='text-default-900 text-sm'
                                                                    >
                                                                        {
                                                                            node?.appstoreData?.installs || 'unknown'
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </ListboxItem>
                                                )
                                            } )
                                        ) : (
                                            <ListboxItem
                                                key='none'
                                            >
                                                No recent apps
                                            </ListboxItem>
                                        )
                                    }                                
                                </Listbox>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )

} )

const SDKViewLoader: React.FC = React.memo( () => {

    return (
        <React.Suspense
            fallback={
                <div className="flex flex-col items-center justify-center h-screen">
                    <Spinner />
                </div>
            }
        >
            <SDKView />
        </React.Suspense>
        
    )

} )


const query = graphql`
    query SDKViewQuery( $id: ID! ) {
        node( id: $id ) {
            ... on AndroidSdk {
                id
                name
                description
                website
                slug
                ...SDKViewRankFragment
                ...SDKViewStatsFragment
            }
        }
    }
`

const rankFragment = graphql`
    fragment SDKViewRankFragment on AndroidSdk {
        categories(first: 3) {
            edges {
                node {
                    name
                    androidSdks(first: 99) {
                        edges {
                            node {
                                id
                                name
                                androidApps(first: 0) {
                                    count
                                }
                                iosApps(first: 0) {
                                    count
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

const statsFragment = graphql`
    fragment SDKViewStatsFragment on AndroidSdk {
        id
        name
        slug
        androidPopularApps: androidApps(
            first: 10,
            sort: [
                {
                    field: MAX_INSTALLS,
                    direction: DESC,
                }
            ]
        ) {
            count
            edges {
                node {
                    id
                    packageName
                    playstoreData {
                        icon {
                            avif: image( format: AVIF, width: 64, height: 64 ) {
                                url
                            }
                            webp: image( format: WEBP, width: 64, height: 64 ) {
                                url
                            }
                        }
                        title
                        released
                        installs
                    }
                }
            }
        }
        iosPopularApps: iosApps(
            first: 10,
            sort: [
                {
                    field: MAX_INSTALLS,
                    direction: DESC,
                }
            ]
        ) {
            count
            edges {
                node {
                    id
                    packageName
                    appstoreData {
                        icon {
                            avif: image( format: AVIF, width: 64, height: 64 ) {
                                url
                            }
                            webp: image( format: WEBP, width: 64, height: 64 ) {
                                url
                            }
                        }
                        title
                        released
                        installs
                    }
                }
            }
        }
        androidLatestApps: androidApps(
            first: 10,
            sort: [
                {
                    field: RELEASED,
                    direction: DESC,
                }
            ]
        ) {
            edges {
                node {
                    id
                    packageName
                    playstoreData{
                        icon {
                            avif: image( format: AVIF, width: 64, height: 64 ) {
                                url
                            }
                            webp: image( format: WEBP, width: 64, height: 64 ) {
                                url
                            }
                        }
                        title
                        released
                        installs
                    }
                }
            }
        }
        iosLatestApps: iosApps(
            first: 10,
            sort: [
                {
                    field: RELEASED,
                    direction: DESC,
                }
            ]
        ) {
            edges {
                node {
                    id
                    packageName
                    appstoreData{
                        icon {
                            avif: image( format: AVIF, width: 64, height: 64 ) {
                                url
                            }
                            webp: image( format: WEBP, width: 64, height: 64 ) {
                                url
                            }
                        }
                        title
                        released
                        installs
                    }
                }
            }
        }
    }
`

export default SDKViewLoader