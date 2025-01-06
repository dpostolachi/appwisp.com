import { Link, Radio, RadioGroup } from '@nextui-org/react'
import React from 'react'
import { useLocation } from 'react-router-dom'

const AppFiltersSource: React.FC = React.memo( () => {

	const { search, pathname } = useLocation()

	// @note: only download filters and query are allowed to be passed to the other platform

	const {
		downloadsMin,
		downloadsMax,
		query,
		sdks,
	} = React.useMemo( () => {
		const params = new URLSearchParams( search )
		const downloadsMin = params.get( 'downloads.min' )
		const downloadsMax = params.get( 'downloads.max' )
		const query = params.get( 'query' )
		const sdks = params.getAll( 'sdks' ) || []

		return {
			downloadsMin: downloadsMin ? parseInt( downloadsMin ) : null,
			downloadsMax: downloadsMax ? parseInt( downloadsMax ) : 25_000_000_000,
			query,
			sdks,
		}
	}, [ search ] )

	const querySearch = React.useMemo( () => {
		const min = downloadsMin
		const max = downloadsMax

		const newSearchParams = new URLSearchParams()
		if ( min ) {
			newSearchParams.set( 'downloads.min', min.toString() )
		}
		if ( max ) {
			newSearchParams.set( 'downloads.max', max.toString() )
		}
		if ( query ) {
			newSearchParams.set( 'query', query )
		}
		if ( sdks.length ) {
			sdks.forEach( sdk => {
				newSearchParams.append( 'sdks', sdk )
			} )
		}

		return '?' + newSearchParams.toString()

	}, [ downloadsMax, downloadsMin, query, sdks ] )

	const value = React.useMemo( () => {
		return pathname.includes( '/app/android' ) ? 'android' : 'ios'
	}, [ pathname ] )

	return (
		<div>
			<RadioGroup
				orientation="horizontal"
				label="Source"
				value={ value }
			>
				{
					value === 'android' ? (
						<>
							<Radio value="android">Android</Radio>
							<Radio as={ Link } href={ `/app/ios/list${ querySearch }` } value="ios" defaultChecked>iOS</Radio>
						</>
					) : (
						<>
							<Radio as={ Link } href={ `/app/android/list${ querySearch }` } value="android">Android</Radio>
							<Radio value="ios" defaultChecked>iOS</Radio>
						</>
					)
				}
			</RadioGroup>
		</div>
	)
} )

export default AppFiltersSource