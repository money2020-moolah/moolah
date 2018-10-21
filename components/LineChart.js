import React from 'react'
import { LineChart, Grid } from 'react-native-svg-charts'

export default class LineChartExample extends React.PureComponent {

    render() {

         const data = [
            {
                key: 1,
                amount: 50,
                svg: { fill: '#ff9478' },
            },
            {
                key: 2,
                amount: 50,
                svg: { fill: '#c5eff7' }
            },
            {
                key: 3,
                amount: 40,
                svg: { fill: '#7befb2' }
            },
            {
                key: 4,
                amount: 95,
                svg: { fill: '#d966ff' }
            },
            {
                key: 5,
                amount: 35,
                svg: { fill: '#ecb3ff' }
            }
        ]

        return (
            <LineChart
                style={{ height: 200 }}
                data={ data }
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid/>
            </LineChart>
        )
    }
}