import React from 'react'
import { useFragment, graphql } from '@react-relay'
import { Accordion, AccordionItem, Checkbox, CheckboxGroup } from '@nextui-org/react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { AppFiltersCategoriesFragment$key } from './__generated__/AppFiltersCategoriesFragment.graphql'


interface ICategoryOption {
	label: string
	value: string
}

interface ICategoryGroup {
	label: string
	id: string
	options: ICategoryOption[]
}

type CategoryUnion = ICategoryOption | ICategoryGroup

export const AppFiltersCategoriesPlaceholder = React.memo( () => {
	return (
		<CheckboxGroup
			orientation="vertical"
			name="categories"
		>
			<Checkbox
				value="1"
			>
				<div className="h-5 w-20 rounded-lg bg-default-200"></div>
			</Checkbox>
			<Checkbox
				value="2"
			>
				<div className="h-5 w-20 rounded-lg bg-default-200"></div>
			</Checkbox>
			<Checkbox
				value="3"
			>
				<div className="h-5 w-20 rounded-lg bg-default-200"></div>
			</Checkbox>
			<Checkbox
				value="4"
			>
				<div className="h-5 w-10 rounded-lg bg-default-200"></div>
			</Checkbox>
			<Checkbox
				value="5"
			>
				<div className="h-5 w-10 rounded-lg bg-default-200"></div>
			</Checkbox>
			<Checkbox
				value="6"
			>
				<div className="h-5 w-10 rounded-lg bg-default-200"></div>
			</Checkbox>
			<Checkbox
				value="7"
			>
				<div className="h-5 w-10 rounded-lg bg-default-200"></div>
			</Checkbox>
			<Checkbox
				value="8"
			>
				<div className="h-5 w-10 rounded-lg bg-default-200"></div>
			</Checkbox>
		</CheckboxGroup>
	)
} )

const AppFiltersCategories: React.FC<{
	fragmentRef: AppFiltersCategoriesFragment$key
}> = React.memo( ( {
	fragmentRef,
} ) => {

	const {
		search,
		pathname,
	} = useLocation()

	const rawValues = React.useMemo( () => {
		const params = new URLSearchParams( search )
		const values = ( params.getAll( 'categories' ) || [] )
			.map( decodeURIComponent )
		return values
	}, [ search ] )

	const { platform } = useParams<{ platform: string }>()

	const { allPlaystoreCategories, allAppstoreCategories } = useFragment( categoriesFragment, fragmentRef )

	const playStoreCategoriesNodes = React.useMemo( () => {
		return ( allPlaystoreCategories?.edges || [] ).map( ( edge ) => {
			return edge!.node!
		} )
	}, [ allPlaystoreCategories ] )

	const appStoreCategoriesNodes = React.useMemo( () => {
		return allAppstoreCategories!.edges!.map( ( edge ) => {
			return edge!.node!
		} )
	}, [ allAppstoreCategories ] )

	const useCategories = React.useMemo( () => {
		return platform === 'android' ? playStoreCategoriesNodes : appStoreCategoriesNodes
	}, [ platform, playStoreCategoriesNodes, appStoreCategoriesNodes ] )

	const categoriesOptions: CategoryUnion[]  = React.useMemo( () => {
		// Group Games categories under a single category
		const categories = useCategories.slice()

		const GameCategories = platform === 'android' ? categories.filter( ( category ) => {
			return atob( category.id ).split(':')[1].startsWith( 'GAME' )
		} ) : []

		const OtherCategories = platform === 'android' ? categories.filter( ( category ) => {
			return !atob( category.id ).split(':')[1].startsWith( 'GAME' )
		} ) : categories

		const gamesOption: CategoryUnion = {
			label: 'Games',
			id: 'games',
			options: GameCategories.map( ( category ) => {
				return {
					label: category.name,
					value: category.id,
				}
			} )
			.sort( ( a, b ) => {
				const isASelected = rawValues.includes( a.value )
				const isBSelected = rawValues.includes( b.value )
				// sort selected categories first
				if ( isASelected && ! isBSelected ) {
					return -1
				}
				if ( ! isASelected && isBSelected ) {
					return 1
				}
				// sort alphabetically
				if ( a.label < b.label ) {
					return -1
				}
				if ( a.label > b.label ) {
					return 1
				}
				return 0
			} )
		}

		const otherOptions: CategoryUnion[] = OtherCategories.map( ( category ) => {
			return {
				label: category.name,
				value: category.id,
			}
		} )

		const allOptions: CategoryUnion[] = platform === 'android' ? otherOptions.concat( gamesOption ) : otherOptions

		return allOptions.sort( ( a, b ) => {

			let isASelected = false
			let isBSelected = false

			if ( ( a as ICategoryGroup ).options ) {
				isASelected = ( a as ICategoryGroup ).options.some( ( option ) => {
					return rawValues.includes( option.value )
				} )
			} else {
				isASelected = rawValues.includes( ( a as ICategoryOption ).value )
			}

			if ( ( b as ICategoryGroup ).options ) {
				isBSelected = ( b as ICategoryGroup ).options.some( ( option ) => {
					return rawValues.includes( option.value )
				} )
			} else {
				isBSelected = rawValues.includes( ( b as ICategoryOption ).value )
			}
			// sort selected categories first
			if ( isASelected && ! isBSelected ) {
				return -1
			}
			if ( ! isASelected && isBSelected ) {
				return 1
			}

			// sort alphabetically
			if ( a.label < b.label ) {
				return -1
			}
			if ( a.label > b.label ) {
				return 1
			}

			return 0
		} )

	}, [ useCategories, rawValues, platform ] )

	// add selected group categories to the values
	const values = React.useMemo( () => {
		const useValues = rawValues.slice()

		const groupCategories = categoriesOptions.filter( ( category ) => {
			return ( category as ICategoryGroup ).options
		} )

		groupCategories.forEach( ( category ) => {
			const useCategory = category as ICategoryGroup
			const allSelected = useCategory.options.every( ( option ) => {
				return useValues.includes( option.value )
			} )

			if ( allSelected ) {
				useValues.push( useCategory.id )
			}
		} )

		return useValues
	}, [ rawValues, categoriesOptions ] )

	const valuesRef = React.useRef( rawValues )

	React.useEffect( () => {
		valuesRef.current = rawValues
	}, [ rawValues ] )

	const selectedGroups = React.useMemo( () => {
		return categoriesOptions.filter( ( category ) => {
			return ( category as ICategoryGroup ).options
		} )
		.filter( ( category ) => {
			return ( category as ICategoryGroup ).options.every( ( option ) => {
				return rawValues.includes( option.value )
			} )
		} )
		.reduce( ( acc, rawCategory ) => {
			const category = rawCategory as ICategoryGroup
			acc[ category.id ] = true
			return acc
		}, {} as Record<string, true> )
	}, [ categoriesOptions, rawValues ] )

	const getCheckboxGroupUrl = React.useCallback( ( groupId: string ) => {
		const foundGroup = categoriesOptions.find( ( category ) => {
			return ( category as ICategoryGroup ).id === groupId
		} )

		if ( !foundGroup ) {
			return
		}

		const groupOptions = ( foundGroup as ICategoryGroup ).options.map( ( option ) => {
			return option.value
		} )

		const currentValues = valuesRef.current
		let useValues = currentValues


		if ( !selectedGroups[ groupId ] ) {
			useValues = currentValues.concat( groupOptions )
		} else {
			useValues = currentValues.filter( ( value ) => {
				return !groupOptions.includes( value )
			} )
		}

		const setValues = Array.from( new Set( useValues ) )

		const params = new URLSearchParams( search )

		params.set( 'page', '1' )
		params.delete( 'categories' )
		setValues.forEach( ( value ) => {
			params.append( 'categories', encodeURIComponent( value ) )
		} )

		return `${ pathname }?${ params.toString() }`

	}, [ categoriesOptions, selectedGroups, search, pathname ] )

	const getCheckboxUrl = React.useCallback( ( value: string ) => {
		const params = new URLSearchParams( search )
		const categories = ( params.getAll( 'categories' ) || [] )
			.map( decodeURIComponent )
		params.set( 'page', '1' )
		params.delete( 'categories' )
		const index = categories.indexOf( value )
		if ( index === -1 ) {
			categories.push( value )
		} else {
			categories.splice( index, 1 )
		}
		categories.forEach( ( category ) => {
			params.append( 'categories', encodeURIComponent( category ) )
		} )
		return `${ pathname }?${ params.toString() }`
	}, [ search, pathname ] )

	return (
		<CheckboxGroup
			orientation="vertical"
			name="categories"
			value={ values }
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			classNames={ {
				wrapper: 'max-h-96 overflow-y-auto flex-nowrap',
			} }
		>
			{
				categoriesOptions.map( ( category ) => {

					if ( ( category as ICategoryGroup ).options ) {

						const useCategoryGroup = category as ICategoryGroup
						const id = useCategoryGroup.id
						const checkedOptionsValues = useCategoryGroup.options.map( ( option ) => {
							return option.value
						} )
						.filter( ( value ) => {
							return values.includes( value )
						} )

						return (
							<Accordion
								key={ id }
								className="px-0"
							>
								<AccordionItem
									title={ (
										<div>
											<Checkbox
												value={ id }
												as={ Link }
												to={ getCheckboxGroupUrl( id ) }
											>
												{ useCategoryGroup.label }
												{ checkedOptionsValues.length > 0 && ` (${ checkedOptionsValues.length })` }
											</Checkbox>
										</div>
									) }
									classNames={
										{
											trigger: 'p-0',
										}
									}
								>
									{
										useCategoryGroup.options.map( ( option ) => {
											return (
												<Checkbox
													className="w-full max-w-full pl-4"
													key={ option.value }
													value={ option.value }
													as={ Link }
													to={ getCheckboxUrl( option.value ) }
												>
													{ option.label }
												</Checkbox>
											)
										} )
									}
								</AccordionItem>
							</Accordion>
						)
					}

					const useOption = category as ICategoryOption

					return (
						<Checkbox
							className="w-full max-w-full"
							key={ useOption.value }
							value={ useOption.value }
							as={ Link }
							to={ getCheckboxUrl( useOption.value ) }
						>
							{ useOption.label }
						</Checkbox>
					)
				} )
			}
		</CheckboxGroup>
	)
} )


export default AppFiltersCategories

const categoriesFragment = graphql`
	fragment AppFiltersCategoriesFragment on RootQueryType {
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
	}
`