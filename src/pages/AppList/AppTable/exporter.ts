const getPlatfromAPI = (platform: 'ios' | 'android') => {
	switch (platform) {
		case 'ios':
			return '/api/1.0/appstore/apps'
		case 'android':
			return '/api/1.0/playstore/apps'
	}
}

const IgnoreKeys = [
	'icon',
]

const listToCSV = (list: object[]) => {
	if ( !list.length ) { return }
	const first = list[0]
	const header = Object.keys( first )
		.filter( ( key ) => !IgnoreKeys.includes( key ) )
		.map( ( key ) => {
			return `"${ key.replace( /"/g, '""' ) }"`
		} )
	const body = list.map( ( item ) => {
		
		return Object.keys( item )
		.filter( ( key ) => !IgnoreKeys.includes( key ) )
		.map( ( key ) => {
			const value = item[ key as keyof typeof item ] as string | number | boolean
			return `"${ value.toString().replace( /"/g, '""' ) }"`
		} ).join( ',' )
	} ).join( '\n' )

	return `${ header }\n${ body }`

}

export const exportAppTableToCSV = async (
	onProgress: ( progress: number ) => void,
	platform: 'ios' | 'android',
	categories?: string[],
	sdks?: string[],
	query?: string,
	minInstalls?: number,
	maxInstalls?: number,
) => {

	const url = getPlatfromAPI(platform)
	const params = new URLSearchParams()

	params.set( 'take', '200' )

	if (categories?.length) {
		categories.forEach( category => {
			const decoded = atob( category ).split( ':' )[1]
			params.append( 'categories[]', decoded )
		} )
	}
	if ( sdks?.length ) {
		sdks.forEach( sdk => {
			const decoded = atob( sdk ).split( ':' )[1]
			params.append( 'sdks[]', decoded )
		} )
	}
	if (query) {
		params.append( 'query', query )
	}
	if (minInstalls) {
		params.append( 'min_installs', minInstalls.toString() )
	}
	if (maxInstalls) {
		params.append( 'max_installs', maxInstalls.toString() )
	}

	let hasMore = true
	let requestUrl = `${ url }?${ params.toString() }`

	let acc: object[] = []

	while( hasMore ) {
		const response = await fetch( requestUrl )
		const data = await response.json()

		acc = acc.concat( data.list )

		onProgress( acc.length )

		hasMore = data.has_more
		if ( hasMore ) {
			const nextUrl = new URL( data.next_page )
			requestUrl = nextUrl.pathname + nextUrl.search
		}
		
	}

	const csv = listToCSV( acc )
	if ( !csv ) { return }

	const blob = new Blob( [ csv ], { type: 'text/csv' } )
	const objUrl = URL.createObjectURL( blob )
	const a = document.createElement( 'a' )
	a.href = objUrl
	a.download = 'app-table.csv'
	document.body.appendChild( a )
	a.click()
	URL.revokeObjectURL( url )
	document.body.removeChild( a )
}