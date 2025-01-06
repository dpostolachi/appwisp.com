import React from 'react'
import Chart from 'chart.js/auto';
import { ChartColorsHex } from './colors';

export interface ChartSerie {
    name: string
    value: number
}

const DonutChart: React.FC<{
    items: ChartSerie[],
}> = React.memo( ( {
    items,
} ) => {

    const chartId = React.useId()

    const renderChartTimeout = React.useRef<NodeJS.Timeout>()

    React.useEffect( () => {
        if ( renderChartTimeout.current ) {
            clearTimeout( renderChartTimeout.current )
        }

        renderChartTimeout.current = setTimeout( () => {
            new Chart( chartId, {
                type: 'doughnut',
                data: {
                    labels: items.map( item => item.name ),
                    datasets: [
                        {
                            data: items.map( item => item.value ),
                            backgroundColor: ChartColorsHex,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'right',
                        },
                    },
                    // move chart to the left
                    layout: {
                        padding: {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                        },
                    },
                }
            } )
        }, 100 )
    } )

    return (
        <div>
            <canvas
                width={ 256 }
                height={ 64 }
                id={ chartId }
            />
        </div>
    )

} )

export default DonutChart