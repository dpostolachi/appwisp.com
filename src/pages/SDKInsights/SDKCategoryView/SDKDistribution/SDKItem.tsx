import { Card, CardBody, Link } from '@nextui-org/react'
import { formatNumber } from 'pages/AppList/AppFilters'
import React from 'react'
import { Progress } from '@nextui-org/react'
import styled from '@emotion/styled'
import { graphql, useFragment } from '@react-relay'
import { SDKItemFragment$key } from './__generated__/SDKItemFragment.graphql'
import type { ChartSerie } from 'components/Charts/DonutChart'
import { ChartColors } from 'components/Charts/colors'

const DonutChart = React.lazy( () => import( 'components/Charts/DonutChart' ) )

export const StyledProgress = styled( Progress )`
	width: ${ props => `${ ( props as any ).width }%` };
	min-width: 10px;
	${
		ChartColors.map( ( color, index ) => {
			return `
				&[data-index="${ index }"] {
					--nextui-primary: ${ color };
				}
			`
		} )
	}
	&[data-loading] {
		opacity: 0.5;
	}
`

const DonutChartPlaceholder = styled.div`
    width: 256px;
    height: 64px;
    background-color: #f0f0f0;
    border-radius: 3px;
`

const ChartContainer = styled.div`
    width: 256px;
    height: 64px;
`

const SDKItem: React.FC<{
    fragmentRef: SDKItemFragment$key,
    totalCount: number,
    index: number,
}> = React.memo( ( {
    fragmentRef,
    totalCount,
    index,
} ) => {

    const sdk = useFragment( fragment, fragmentRef )
    const total = sdk!.androidApps!.count! + sdk!.iosApps!.count!
    const percentage = ( total / totalCount ) * 100

    const platformSeries: ChartSerie[] = React.useMemo( () => {
        return [
            {
                name: 'Android',
                value: sdk!.androidApps!.count!,
            },
            {
                name: 'iOS',
                value: sdk!.iosApps!.count!,
            },
        ]
    }, [ sdk ] )

    return (
        <Card
            shadow='none'
        >
            <CardBody>
                <div
                    key={ sdk!.name }
                    className='flex gap-4 flex-col'
                >
                    <div
                        className='flex flex-row justify-start gap-4 w-full items-center'
                    >
                        <Link
                            className="text-2xl font-semibold"
                            href={ `/sdk/${ sdk!.slug }` }
                        >
                            { sdk!.name }
                        </Link>
                    </div>
                    <div
                        className='flex flex-col gap-4 w-full'
                    >
                        <div
                            className='w-full flex flex-col gap-2'
                        >
                            <span
                                className='text-sm text-default-500 font-semibold'
                            >
                                Market Share
                            </span>
                            <StyledProgress
                                size='lg'
                                width={ 100 }
                                label={ `${ formatNumber( total ) } apps` }
                                value={ percentage }
                                showValueLabel
                                data-index={ index }
                                formatOptions={ {
                                    style: 'percent',
                                    maximumFractionDigits: 2,
                                } }
                            />
                        </div>
                        <div
                            className='w-full flex-col gap-2 flex'
                        >
                            <span
                                className='text-sm text-default-500 font-semibold'
                            >
                                Platform Distribution
                            </span>
                            <ChartContainer>
                                <React.Suspense
                                    fallback={ <DonutChartPlaceholder /> }
                                >
                                    <DonutChart
                                        items={ platformSeries }
                                    />
                                </React.Suspense>
                            </ChartContainer>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )

} )

const fragment = graphql`
    fragment SDKItemFragment on AndroidSdk {
        id
        name
        slug
        androidApps(first: 0) {
            count
        }
        iosApps(first: 0) {
            count
        }
    }
`

export default SDKItem