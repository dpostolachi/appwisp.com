import { Card, CardBody, Link, Button } from '@nextui-org/react'
import React from 'react'
import { useLazyLoadQuery } from '@react-relay'
import { graphql } from '@react-relay'
import { formatNumber } from 'pages/AppList/AppFilters'
import { ISEOPayload, useSetSEO } from 'contexts/SEOIntegration'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { HomePageQuery } from './__generated__/HomePageQuery.graphql'

const IconsContainer = styled.div`
    max-height: 400px;
    overflow: hidden;
    position: relative;
    &:before {
        content: '';
        display: block;
        position: absolute;
        pointer-events: none;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 90%, rgba(255, 255, 255, 1));
        z-index: 1;
    }
`

const IconsSlideDown = keyframes`
    0% {
        transform: translateY(-50%);
    }
    100% {
        transform: translateY(0);
    }
`

const IconsSlideUp = keyframes`
    0% {
        transform: translateY(0%);
    }
    100% {
        transform: translateY(-50%);
    }
`

const IconsRow = styled.div`
    &:nth-of-type(odd) {
        animation: ${ IconsSlideDown } 20s linear infinite;
    }
    &:nth-of-type(even) {
        animation: ${ IconsSlideUp } 20s linear infinite;
    }
`

const PageSEO: ISEOPayload = {
	title: 'Discover the Best Mobile Apps and SDK Insights - AppWisp',
	description: 'Explore top mobile apps for Android and iOS, get detailed SDK insights, and stay updated with the latest app trends. AppWisp is your go-to resource for comprehensive app analysis.',
	keywords:
        'mobile apps, Android apps, iOS apps, app reviews, SDK insights, app trends, app analysis, AppWisp'.split( ', ' ),
}

const HomePage = React.memo( () => {

    useSetSEO( PageSEO )

    const {
        overviewStats,
        randomApps,
    } = useLazyLoadQuery<HomePageQuery>( homeQuery, {} )

    const randomAppsCols = React.useMemo( () => {
        const androidIcons = randomApps.androidApps?.map( ( app ) => {
            return {
                icon: app?.playstoreData?.icon || '',
                title: app?.playstoreData?.title || '',
            }
        } ) || []
        const iosIcons = randomApps?.iosApps.map( ( app ) => {
            return {
                icon: app?.appstoreData?.icon || '',
                title: app?.appstoreData?.title || '',
            }
        } ) || []

        const joined = androidIcons?.concat( iosIcons )

        // chunk in 5 chunks
        const chunksRandomApps = Array.from( { length: 5 }, () => [] ) as {
            icon: {
                avif: {
                    url: string
                }
                webp: {
                    url: string
                }
            },
            title: string
        }[][]
        joined.forEach( ( icon, index ) => {
            chunksRandomApps[ index % 5 ].push(
                icon as {
                    title: string,
                    icon: {
                        avif: {
                            url: string
                        }
                        webp: {
                            url: string
                        }
                    }
                }
            )
        } )

        return chunksRandomApps


    }, [ randomApps ] )

    return (
        <div
            className='flex flex-col gap-8'
        >
            <Card
                className="w-full md:p-8 bg-transparent"
                shadow="none"
            >
                <CardBody
                    className='flex gap-8 flex-col md:flex-row'
                >
                    <div
                        className='flex flex-col gap-8 justify-center w-full md:w-1/2'
                    >
                        <h1
                            className='text-4xl'
                        >
                            Welcome to the appwisp
                        </h1>
                        <p
                            className='text-md text-justify'
                        >
                            Explore the world of mobile apps like never before! appwisp is your go-to destination for comprehensive details about mobile applications available on the Appstore and PlayStore.
                            <br />
                            <br />
                            Using our SDK insights, you can also get a detailed overview of the mobile SDKs popularity and distribution.
                            Helping you make informed decisions and reach new markets and find new opportunities.
                        </p>
                        <div
                            className='flex gap-4'
                        >
                            <Button
                                size='lg'
                                color="primary"
                                href='/app/android/list'
                                as={ Link }
                            >
                                App Explorer
                            </Button>
                            <Button
                                size='lg'
                                color="primary"
                                variant='ghost'
                                href='/sdk/insights'
                                as={ Link }
                            >
                                SDK insights
                            </Button>
                        </div>
                    </div>
                    <div
                        className='flex justify-center w-full md:w-1/2'
                    >
                        <IconsContainer
                            className='flex flex-wrap gap-4'
                        >
                            {
                                randomAppsCols?.map( ( icon, index ) => (
                                    <IconsRow
                                        key={ index }
                                        className='flex flex-col gap-4'
                                    >
                                        {
                                            icon.map( ( { icon, title }, index ) => (
                                                <div
                                                    key={ `a-${ index }` }
                                                    className='w-16 h-16'
                                                >
                                                    <picture>
                                                        <source
                                                            srcSet={ icon.avif.url }
                                                            type="image/avif"
                                                        />
                                                        <source
                                                            srcSet={ icon.webp.url }
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            src={ icon.avif.url }
                                                            alt={ title }
                                                            title={ title }
                                                            loading='lazy'
                                                            className='w-16 h-16 rounded-lg shadow-md'
                                                        />
                                                    </picture>
                                                </div>
                                            ) )
                                        }
                                        {
                                            icon.map( ( { icon, title }, index ) => (
                                                <div
                                                    key={ `b-${ index }` }
                                                    className='w-16 h-16'
                                                >
                                                    <picture>
                                                        <source
                                                            srcSet={ icon.avif.url }
                                                            type="image/avif"
                                                        />
                                                        <source
                                                            srcSet={ icon.webp.url }
                                                            type="image/webp"
                                                        />
                                                        <img
                                                            src={ icon.avif.url }
                                                            alt={ title }
                                                            title={ title }
                                                            loading='lazy'
                                                            className='w-16 h-16 rounded-lg shadow-md'
                                                        />
                                                    </picture>
                                                </div>
                                            ) )
                                        }
                                    </IconsRow>
                                ) )
                            }
                        </IconsContainer>
                    </div>
                </CardBody>
            </Card>
            <Card
                className="w-full md:p-8 bg-transparent"
                shadow="none"
            >
                <CardBody
                    className='flex flex-col gap-8'
                >
                    <div
                        className='flex flex-col gap-4 justify-center'
                    >
                        <h3
                            className='text-2xl text-default-900 text-center mb-4'
                        >
                            Explore data across
                        </h3>
                        <div
                            className='flex gap-8 justify-center flex-wrap'
                        >
                            <div>
                                <h5
                                    className='text-1xl text-default-500'
                                >
                                    Play Store Apps
                                </h5>
                                <div
                                    className='text-default-900 text-2xl'
                                >
                                    {
                                        formatNumber( overviewStats.androidApps || 0 )
                                    }
                                </div>
                            </div>
                            <div>
                                <h5
                                    className='text-1xl text-default-500'
                                >
                                    Android APKs
                                </h5>
                                <div
                                    className='text-default-900 text-2xl'
                                >
                                    {
                                        formatNumber( overviewStats.processedApks || 0 )
                                    }
                                </div>
                            </div>
                            <div>
                                <h5
                                    className='text-1xl text-default-500'
                                >
                                    Appstore Apps
                                </h5>
                                <div
                                    className='text-default-900 text-2xl'
                                >
                                    {
                                        formatNumber( overviewStats.iosApps || 0 )
                                    }
                                </div>
                            </div>
                            <div>
                                <h5
                                    className='text-1xl text-default-500'
                                >
                                    iOS IPAs
                                </h5>
                                <div
                                    className='text-default-900 text-2xl'
                                >
                                    {
                                        formatNumber( overviewStats.processedIpas || 0 )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )

} )

const homeQuery = graphql`
    query HomePageQuery {
        overviewStats {
            androidApps
            iosApps
            processedApks
            processedIpas
        }
        randomApps {
            androidApps {
                playstoreData {
                    title
                    icon {
                        avif: image(width: 64, height: 64, format: AVIF) {
                            url
                        }
                        webp: image(width: 64, height: 64, format: WEBP) {
                            url
                        }
                    }
                }
            }
            iosApps {
                appstoreData {
                    title
                    icon {
                        avif: image(width: 64, height: 64, format: AVIF) {
                            url
                        }
                        webp: image(width: 64, height: 64, format: WEBP) {
                            url
                        }
                    }
                }
            }
        }
    }
`

export default HomePage