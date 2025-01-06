import { Card, CardBody, CardHeader, Divider, Link, Listbox, ListboxItem, Skeleton } from '@nextui-org/react'
import React from 'react'
import { useLazyLoadQuery } from '@react-relay'
import { graphql } from '@react-relay'
import { SDKCategoriesQuery } from './__generated__/SDKCategoriesQuery.graphql'
import { useMatch } from 'react-router-dom'

const CategoriesPlaceholder = () => {
	return (
		<Listbox>
			<ListboxItem
				key="p1"
			>
				<Skeleton className="w-3/5 rounded-lg">
					<div className="h-5 w-full rounded-lg bg-default-200"></div>
				</Skeleton>
			</ListboxItem>
			<ListboxItem
				key="p2"
			>
				<Skeleton className="w-4/5 rounded-lg">
					<div className="h-5 w-full rounded-lg bg-default-200"></div>
				</Skeleton>
			</ListboxItem>
			<ListboxItem
				key="p3"
			>
				<Skeleton className="w-5/5 rounded-lg">
					<div className="h-5 w-full rounded-lg bg-default-200"></div>
				</Skeleton>
			</ListboxItem>
			<ListboxItem
				key="p4"
			>
				<Skeleton className="w-5/5 rounded-lg">
					<div className="h-5 w-full rounded-lg bg-default-200"></div>
				</Skeleton>
			</ListboxItem>
			<ListboxItem
				key="p5"
			>
				<Skeleton className="w-3/5 rounded-lg">
					<div className="h-5 w-full rounded-lg bg-default-200"></div>
				</Skeleton>
			</ListboxItem>
			<ListboxItem
				key="p6"
			>
				<Skeleton className="w-3/5 rounded-lg">
					<div className="h-5 w-full rounded-lg bg-default-200"></div>
				</Skeleton>
			</ListboxItem>
			<ListboxItem
				key="p7"
			>
				<Skeleton className="w-4/5 rounded-lg">
					<div className="h-5 w-full rounded-lg bg-default-200"></div>
				</Skeleton>
			</ListboxItem>
			<ListboxItem
				key="p8"
			>
				<Skeleton className="w-3/5 rounded-lg">
					<div className="h-5 w-full rounded-lg bg-default-200"></div>
				</Skeleton>
			</ListboxItem>
			<ListboxItem
				key="p9"
			>
				<Skeleton className="w-3/5 rounded-lg">
					<div className="h-5 w-full rounded-lg bg-default-200"></div>
				</Skeleton>
			</ListboxItem>
			<ListboxItem
				key="p10"
			>
				<Skeleton className="w-3/5 rounded-lg">
					<div className="h-5 w-full rounded-lg bg-default-200"></div>
				</Skeleton>
			</ListboxItem>
		</Listbox>
	)
}

const CategoriesRender = () => {

	const {
		allAndroidSdksCategories,
	} = useLazyLoadQuery<SDKCategoriesQuery>( query, {} )

	const categoryNodes = React.useMemo( () => {
		return allAndroidSdksCategories!.edges!.map( ( edge ) => {
			return edge!.node!
		} )
	}, [ allAndroidSdksCategories ] )

	const matching = useMatch( '/sdk/insights/:id' )

	const selectedKeys = React.useMemo( () => {
		return matching?.params.id ? [ matching.params.id ] : []
	}, [ matching ] )

	return (
		<Listbox
			key={ matching?.params.id }
			selectedKeys={ selectedKeys }
			selectionMode='single'
		>
			{
				categoryNodes.map( ( category ) => {
					return (
						<ListboxItem
							className={ selectedKeys?.length && category.slug === selectedKeys[ 0 ] ? 'bg-primary-500 text-white' : ''}
							key={ category!.slug }
							value={ category!.slug }
						>
							<Link
								className="text-inherit"
								href={ `/sdk/insights/${ category.slug }` }
							>
								{ category!.name }
							</Link>
						</ListboxItem>
					)
				} )
			}
		</Listbox>
	)

}

const SDKCategories = React.memo( () => {
	return (
		<Card
			shadow="none"
		>
			<CardHeader>
				<h2
					className='text-1xl font-bold text-center w-full'
				>
					SDK Categories
				</h2>
			</CardHeader>
			<Divider />
			<CardBody>
				<React.Suspense fallback={ <CategoriesPlaceholder /> }>
					<CategoriesRender />
				</React.Suspense>
			</CardBody>
		</Card>
	)
} )

export default SDKCategories

const query = graphql`
	query SDKCategoriesQuery {
		allAndroidSdksCategories(first: 99) {
			edges {
				node {
					id
					name
					slug
				}
			}
		}
	}
`