const HexToHSL = ( hex: string ) => {
	let r = 0, g = 0, b = 0
	if ( hex.length === 4 ) {
		r = parseInt( hex[ 1 ] + hex[ 1 ], 16 )
		g = parseInt( hex[ 2 ] + hex[ 2 ], 16 )
		b = parseInt( hex[ 3 ] + hex[ 3 ], 16 )
	} else if ( hex.length === 7 ) {
		r = parseInt( hex[ 1 ] + hex[ 2 ], 16 )
		g = parseInt( hex[ 3 ] + hex[ 4 ], 16 )
		b = parseInt( hex[ 5 ] + hex[ 6 ], 16 )
	}
	r /= 255
	g /= 255
	b /= 255
	const max = Math.max( r, g, b )
	const min = Math.min( r, g, b )
	let h = ( max + min ) / 2
	let s = ( max + min ) / 2
	let l = ( max + min ) / 2
	if ( max === min ) {
		h = s = 0
	} else {
		const d = max - min
		s = l > 0.5 ? d / ( 2 - max - min ) : d / ( max + min )
		switch ( max ) {
			case r:
				h = ( ( g - b ) / d ) + ( g < b ? 6 : 0 )
				break
			case g:
				h = ( ( b - r ) / d ) + 2
				break
			case b:
				h = ( ( r - g ) / d ) + 4
				break
		}
		h /= 6
	}
	h = Math.round( h * 360 )
	s = Math.round( s * 100 )
	l = Math.round( l * 100 )
	return `${ h } ${ s }% ${ l }%`
}

const Colors = [ "#b33dc6", "#ea5545", "#f46a9b", "#ef9b20", "#edbf33", "#ede15b", "#bdcf32", "#87bc45", "#27aeef", "#0070f0" ].reverse()
const ColorsChart = [ '#43A047', '#1E88E5' ]

const RawChartColors = Colors
	.map( HexToHSL )

export const ChartColors = RawChartColors.concat( RawChartColors ).concat( RawChartColors ).concat( RawChartColors )

export const ChartColorsHex = ColorsChart.concat( ColorsChart ).concat( ColorsChart ).concat( ColorsChart )