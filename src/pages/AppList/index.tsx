import React from 'react'
import AppFilters from './AppFilters'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import AppTable from './AppTable'
import { Input } from '@nextui-org/react'

const AppList = React.memo( () => {

	const {
		platform,
	} = useParams<{
		platform: string
	}>()

	const { search } = useLocation()
	const navigate = useNavigate()

	const formData = React.useMemo( () => {
		const params = new URLSearchParams( search )

		const downloadsMin = params.get( 'downloads.min' ) || '1'
		const downloadsMax = params.get( 'downloads.max' ) || '25000000000'
		const page = params.get( 'page' ) || '1'
		const categories = params.getAll( 'categories' ) || []
		const sdks = params.getAll( 'sdks' ) || []
		const query = params.get( 'query' ) || ''

		return {
			downloads: [
				parseInt( downloadsMin ),
				parseInt( downloadsMax ),
			] as [ number, number ],
			page: parseInt( page ),
			categories: categories.map( decodeURIComponent ),
			sdks: sdks.map( decodeURIComponent ),
			query,
			platform: platform as 'ios' | 'android',
		}
	}, [ search, platform ] )

	const handleQueryChange = React.useCallback( ( e: React.ChangeEvent<HTMLInputElement> ) => {
		const params = new URLSearchParams( window.location.search )
		
		params.set( 'query', e.target.value )
		params.set( 'page', '1' )

		navigate(
			`${ window.location.pathname }?${ params.toString() }`,
			{
				replace: true,
			}
		)
	}, [ navigate ] )

	return (
		<div
			className="flex flex-col gap-8"
		>
			<div
				className="flex flex-row gap-8"
			>
				<div
					className="hidden md:flex w-1/4"
				>
				</div>
				<div
					className="w-full md:w-3/4 flex flex-col gap-8"
				>
					<h1
						className='text-4xl font-bold'
					>
						App explorer
					</h1>
					<Input
						placeholder="Search app by name"
						size="sm"
						onChange={ handleQueryChange }
						defaultValue={ formData.query }
					/>
				</div>
			</div>
			<div
				className="flex gap-8 flex-col md:flex-row"
			>
				<div
					className="w-full md:w-1/4"
				>
					<React.Suspense>
						<AppFilters
						/>
					</React.Suspense>
				</div>
				<div
					className="w-full md:w-3/4"
				>
					<AppTable
					/>
				</div>
			</div>
		</div>
	)

} )

export default AppList