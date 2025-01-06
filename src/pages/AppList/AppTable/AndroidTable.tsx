import { graphql, useFragment } from '@react-relay'
import React from 'react'
import { AndroidTableFragment$key } from './__generated__/AndroidTableFragment.graphql'
import { Link, TableCell, TableRow, Table, Image, TableBody, TableColumn, TableHeader } from '@nextui-org/react';

const AndroidTable: React.FC<{
	listRef: AndroidTableFragment$key;
}> = React.memo( ( {
	listRef,
} ) => {

	const {
		edges,
	} = useFragment( fragment, listRef )

	const nodes = edges!.map( ( edge ) => edge!.node! )

	return (
		<Table
			isHeaderSticky
			shadow='none'
			id="app-table"
		>
			<TableHeader>
				<TableColumn>App name</TableColumn>
				<TableColumn>Downloads</TableColumn>
				<TableColumn>Developer</TableColumn>
				<TableColumn>Category</TableColumn>
			</TableHeader>
			<TableBody>
			{
				nodes.map( ( node ) => {
					const id = node!.id
					const packageName = node!.packageName
					const title = node!.playstoreData?.title || ''
					const icon = node!.playstoreData?.icon
					const installs = node!.playstoreData?.installs || 'unknown'
					const devName = node!.playstoreData?.developer?.name || 'unknown'
					const devCountry = node!.playstoreData?.developer?.countryName
					const categories = node!.playstoreData!.categories?.map( ( category ) => {
						return category!.name
					} ).join( ', ' ) || 'unknown'

					return (
						<TableRow key={ id }>
							<TableCell>
								<Link
									href={ `/app/android/${ packageName }` }
									className='flex flex-row gap-4 items-center hover:underline text-foreground hover:text-primary-500'
								>
									<div
										className="flex flex-row gap-4 items-center"
									>
										<picture>
											<source srcSet={ icon?.avif.url } type="image/avif" />
											<source srcSet={ icon?.webp.url } type="image/webp" />
											<Image
												shadow="sm"
												radius="lg"
												alt={ title }
												className='w-8 h-8 min-w-8 min-h-8'
												src={ icon?.avif.url }
											/>
										</picture>
									{ title }
									</div>
								</Link>
							</TableCell>
							<TableCell>
								{ installs }
							</TableCell>
							<TableCell>
								{ devName }
								{ devCountry ? (
									<span className='text-default-500 text-sm ml-1'>
										({ devCountry })
									</span>
								) : '' }
							</TableCell>
							<TableCell>
								{
									categories
								}
							</TableCell>
						</TableRow>
					)
				} )
			}
			</TableBody>
		</Table>
	)

} )

const fragment = graphql`
	fragment AndroidTableFragment on AndroidAppConnection {
		edges {
			node {
				id
				packageName
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
					installs
					developer {
						name
						countryName
					}
					categories {
						name
					}
				}
			}
		}
	}
`

export default AndroidTable