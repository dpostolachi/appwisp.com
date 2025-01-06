import React from 'react'
import { graphql, useFragment } from '@react-relay'
import { Accordion, AccordionItem, Checkbox, CheckboxGroup, Link } from '@nextui-org/react'
import { AppFiltersSDKs_fragmentSDKCategory$key } from './__generated__/AppFiltersSDKs_fragmentSDKCategory.graphql'
import { useLocation } from 'react-router-dom'
import { AppFiltersSDKsFragment$key } from './__generated__/AppFiltersSDKsFragment.graphql'

// eslint-disable-next-line react-refresh/only-export-components
const AppFilterSDKGroup: React.FC<{
    fragmentRef: AppFiltersSDKs_fragmentSDKCategory$key,
    value: string[],
}> = ( {
    fragmentRef,
    value,
} ) => {
    const {
        name,
        androidSdks,
    } = useFragment( fragmentSDKCategoryFragment, fragmentRef )

    const useAndroidSdks = React.useMemo( () => {
        return ( androidSdks?.edges || [] )
            .map( ( edge ) => edge!.node! )
    }, [ androidSdks ] )

    const sortedSDKs = React.useMemo( () => {
		return useAndroidSdks.sort( ( a, b ) => {
			const isASelected = value.includes( a.id )
			const isBSelected = value.includes( b.id )

            // sort selected categories first
            if ( isASelected && ! isBSelected ) {
                return -1
            }
            if ( ! isASelected && isBSelected ) {
                return 1
            }

            return 0
		} )
	}, [ value, useAndroidSdks ] )

    const {
        search,
        pathname,
    } = useLocation()

    const getSDKLink = React.useCallback( ( slug: string ) => {
        const params = new URLSearchParams( search )
        const values = ( params.getAll( 'sdks' ) || [] ).map( decodeURIComponent )
        const index = values.indexOf( slug )
        params.delete( 'sdks' )
        params.set( 'page', '1' )
        if ( index === -1 ) {
            values.push( slug )
        } else {
            values.splice( index, 1 )
        }

        values.forEach( ( value ) => {
            params.append( 'sdks', encodeURIComponent( value ) )
        } )
        
        return `${ pathname }?${ params.toString() }`
    }, [ search, pathname ] )

    const groupSelectedValues = React.useMemo( () => {
        return useAndroidSdks
            .map( ( sdk ) => sdk!.slug )
            .filter( ( slug ) => value.includes( slug ) )
    }, [ value, useAndroidSdks ] )

    return (
        <Accordion
        >
            <AccordionItem
                key="open"
                subtitle={
                    (
                        <span
                            className='text-base md:text-md text-default-900'
                        >
                            { name }
                            { groupSelectedValues.length > 0 && ` (${ groupSelectedValues.length })` }
                        </span>
                    )
                }
            >
                <CheckboxGroup
                    orientation="vertical"
                    name="categories"
                    value={ value }
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    classNames={ {
                        wrapper: 'max-h-96 overflow-y-auto flex-nowrap',
                    } }
                >
                    {
                        sortedSDKs.map( ( sdk ) => {
                            return (
                                <Checkbox
                                    className="w-full max-w-full"
                                    key={ sdk!.slug }
                                    value={ sdk!.slug }
                                    as={ Link }
                                    href={ getSDKLink( sdk!.slug ) }
                                >
                                    { sdk!.name }
                                </Checkbox>
                            )
                        } )
                    }
                </CheckboxGroup>
            </AccordionItem>
        </Accordion>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
const AppFiltersSDKs: React.FC<{
    fragmentRef: AppFiltersSDKsFragment$key,
}> = ( {
    fragmentRef,
} ) => {

    const { search } = useLocation()

    const value = React.useMemo( () => {
        const params = new URLSearchParams( search )
        return ( params.getAll( 'sdks' ) || [] ).map( decodeURIComponent )
    }, [ search ] )
    
    const { allAndroidSdksCategories } = useFragment( categoriesFragment, fragmentRef )
    const nodes = React.useMemo( () => {
        return ( allAndroidSdksCategories?.edges || [] )
            .map( ( edge ) => {
                const node = edge!.node!
                const sdks = ( node.androidSdks?.edges || [] )
                    .map( ( edge ) => edge!.node! )
                return {
                    ...node,
                    sdks,
                }
            } )
    }, [ allAndroidSdksCategories ] )

    return (
        <ul>
            {
                nodes.map( ( node ) => (
                    <li key={ node.id }>
                        <AppFilterSDKGroup
                            fragmentRef={ node }
                            value={ value }
                        />
                    </li>
                ) )
            }
        </ul>
    )

}

// eslint-disable-next-line react-refresh/only-export-components
export default AppFiltersSDKs

const fragmentSDKCategoryFragment = graphql`
    fragment AppFiltersSDKs_fragmentSDKCategory on AndroidSdkCategory {
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
`

const categoriesFragment = graphql`
    fragment AppFiltersSDKsFragment on RootQueryType {
        allAndroidSdksCategories(first: 99) {
            edges {
                node {
                    id
                    name
                    ...AppFiltersSDKs_fragmentSDKCategory
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
