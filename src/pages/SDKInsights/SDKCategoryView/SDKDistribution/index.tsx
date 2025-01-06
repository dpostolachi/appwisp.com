/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useFragment, graphql } from '@react-relay'
import { Divider } from '@nextui-org/react'
import { SDKDistributionFragment$key } from './__generated__/SDKDistributionFragment.graphql'
import SDKItem, { StyledProgress } from './SDKItem'

export const SDKDistributionPlaceholder = () => {
	return (
		<>
			<div
				className='flex flex-row gap-4'
			>
				<div
					className='w-1/4'
				>
					<div className="h-5 w-full rounded-lg bg-default-200"></div>
				</div>
				<div
					className='w-3/4 flex flex-row gap-4'
				>
					<StyledProgress
						size='lg'
						width={ 80 }
						value={ 100 }
						data-loading
						disableAnimation
						isIndeterminate
					/>
				</div>
			</div>
			<div
				className='flex flex-row gap-4'
			>
				<div
					className='w-1/4'
				>
					<div className="h-5 w-full rounded-lg bg-default-200"></div>
				</div>
				<div
					className='w-3/4 flex flex-row gap-4'
				>
					<StyledProgress
						size='lg'
						width={ 60 }
						value={ 100 }
						data-loading
						disableAnimation
						isIndeterminate
					/>
				</div>
			</div>
			<div
				className='flex flex-row gap-4'
			>
				<div
					className='w-1/4'
				>
					<div className="h-5 w-full rounded-lg bg-default-200"></div>
				</div>
				<div
					className='w-3/4 flex flex-row gap-4'
				>
					<StyledProgress
						size='lg'
						width={ 40 }
						value={ 100 }
						data-loading
						disableAnimation
						isIndeterminate
					/>
				</div>
			</div>
			<div
				className='flex flex-row gap-4'
			>
				<div
					className='w-1/4'
				>
					<div className="h-5 w-full rounded-lg bg-default-200"></div>
				</div>
				<div
					className='w-3/4 flex flex-row gap-4'
				>
					<StyledProgress
						size='lg'
						width={ 8 }
						value={ 100 }
						data-loading
						isIndeterminate
						disableAnimation
					/>
				</div>
			</div>
			<div
				className='flex flex-row gap-4'
			>
				<div
					className='w-1/4'
				>
					<div className="h-5 w-full rounded-lg bg-default-200"></div>
				</div>
			</div>
		</>
	)
}

const SDKDistributionView: React.FC<{
	fragmentRef: SDKDistributionFragment$key
}> = React.memo( ( {
	fragmentRef,
} ) => {

	const node = useFragment( fragment, fragmentRef )

	const androidSDKs = React.useMemo( () => {
		return node?.androidSdks!.edges!.map( ( edge ) => {
			return edge!.node!
		} )
	}, [ node ] )

	const totalCount = React.useMemo( () => {
		return androidSDKs!.reduce( ( acc, sdk ) => {
			return acc + sdk!.androidApps!.count! + sdk!.iosApps!.count!
		}, 0 )
	}, [ androidSDKs ] )

	const sortedSDKs = React.useMemo( () => {
		return androidSDKs!.sort( ( a, b ) => {
			const totalB = b!.androidApps!.count! + b!.iosApps!.count!
			const totalA = a!.androidApps!.count! + a!.iosApps!.count!
			return totalB - totalA
		} )
	}, [ androidSDKs ] )
	
	return (
		<div
			className='flex flex-col gap-8'
		>
			<p
				className='text-sm'
			>
				SDK distribution is calculated based on <b>{ Intl.NumberFormat( 'en-US' ).format( node?.totalApps || 0 ) }</b> apps that currently are using <b>{ node?.name }</b> SDKs.
				<br />
			</p>
			<Divider />
			<div
				className='flex flex-col gap-8'
			>
			{
				/**
				 * Present the SDK in a list using the sortedSDKs array
				 * with a progress bar to represent the distribution of
				 * the SDKs.
				 */

				sortedSDKs.map( ( sdk, index ) => {
					return (
						<SDKItem
							key={ sdk!.id }
							fragmentRef={ sdk! }
							totalCount={ totalCount }
							index={ index }
						/>
					)
				} )
			}
			</div>
		</div>
	)

} )

const SDKDistributionLoader: React.FC<{
	fragementRef: SDKDistributionFragment$key
}> = React.memo( ( {
	fragementRef,
} ) => {

	return (
		<div
			className='flex flex-col gap-4'
		>
			<h3
				className='text-3xl'
			>
				SDK Distribution
			</h3>
			<div
				className='flex flex-col gap-2'
			>
				<React.Suspense fallback={ <SDKDistributionPlaceholder /> }>
					<SDKDistributionView fragmentRef={ fragementRef } />
				</React.Suspense>
			</div>
		</div>
	)

} )

export default SDKDistributionLoader

const fragment = graphql`
	fragment SDKDistributionFragment on AndroidSdkCategory {
		name
		totalApps
		androidSdks(first: 100) {
			edges {
				node {
					id
					androidApps(first: 0) {
						count
					}
					iosApps(first: 0) {
						count
					}
					...SDKItemFragment
				}
			}
		}
	}
`