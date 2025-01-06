import React from 'react';
import Chart from 'chart.js/auto';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Canvas = styled.canvas`
	width: 100%;
	height: 100%;
	border: 1px solid #000;
`

const Stats = React.memo( () => {

	const [ stats, setStats ] = React.useState<{
		ReqCollection: {
			ip: string
			loc: string
			d: string
		}[]
	}>()

	React.useEffect( () => {
		const fetchStats = async () => {
			const response = await fetch( '/__logs' )
			const data = await response.json()
			setStats( data )
		}
		fetchStats()
	}, [] )

	const debounceRef = React.useRef<NodeJS.Timeout>()

	React.useEffect( () => {

		if ( debounceRef.current ) {
			clearTimeout( debounceRef.current )
		}
		const ctx = document.getElementById( 'chart' ) as HTMLCanvasElement

		let myChart: Chart

		debounceRef.current = setTimeout( () => {
			const dataMap: {
				[ key: string ]: Set<string>
			} = ( stats?.ReqCollection || [] ).reduce( ( acc, curr ) => {
				const { ip, d } = curr
				const date = new Date( d )
				const dateYMD = date.toISOString().split( 'T' )[ 0 ]
				if ( acc[ dateYMD ] ) {
					acc[ dateYMD ].add( ip )
				} else {
					acc[ dateYMD ] = new Set( [ ip ] )
				}
				return acc
			}, {} as { [ key: string ]: Set<string> } )
	
			const data: {
				year: string,
				count: number,
			}[] = Object.keys( dataMap ).map( ( dateYMD ) => {
				console.log( dateYMD )
				return [
					new Date( dateYMD ),
					dataMap[ dateYMD ].size,
				] as [ Date, number ]
			} )
				.sort( ( a, b ) => a[ 0 ].getTime() - b[ 0 ].getTime() )
				.map( ( [ date, count ] ) => {
					return {
						year: date.toISOString().split( 'T' )[ 0 ],
						count,
					}
				} )
	

			myChart = new Chart(ctx, {
				type: 'line',
				data: {
					labels: data.map((d) => d.year),
					datasets: [
						{
							data: data.map((d) => d.count),
							label: 'Count',
							borderColor: '#3333ff',
							fill: false,
						},
					],
				},
			});
		}, 1000 )

		return () => {
			if ( myChart ) {
				myChart.destroy()
			}
		}

	}, [ stats ] )

	return (
		<Container>
			<Canvas id="chart" />
		</Container>
	)
} )

export default Stats;