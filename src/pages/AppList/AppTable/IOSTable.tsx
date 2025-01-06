import { graphql, useFragment } from '@react-relay'
import React from 'react'
import { Link, TableCell, TableRow, Image, Table, TableBody, TableColumn, TableHeader } from '@nextui-org/react';
import { IOSTableFragment$key } from './__generated__/IOSTableFragment.graphql';

const IOSTable: React.FC<{
	listRef: IOSTableFragment$key;
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
		>
			<TableHeader
			>
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
					const title = node!.appstoreData?.title || ''
					const icon = node!.appstoreData?.icon
					const installs = node!.appstoreData?.installs || 'unknown'
					const devName = node!.appstoreData?.developer?.name || 'unknown'
					const devCountry = node!.appstoreData?.developer?.playstoreDeveloper?.countryName
					const categories = node!.appstoreData!.category?.name || 'unknown'

					return (
						<TableRow key={ id }>
							<TableCell>
								<Link
									href={ `/app/ios/${ packageName }` }
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
	fragment IOSTableFragment on IosAppConnection {
		edges {
			node {
				id
				packageName
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
					installs
					developer {
						playstoreDeveloper {
							countryName
						}
						name
					}
					category {
						name
					}
				}
			}
		}
	}
`

export default IOSTable