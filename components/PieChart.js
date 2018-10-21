import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts'
 
export default class PieChartExample extends React.PureComponent {
 
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
            svg: { fill: '#fef160' }
        },
        {
            key: 5,
            amount: 35,
            svg: { fill: '#f9bf3b' }
        }
    ]

    const Labels = ({ slices, height, width }) => {
        return slices.map((slice, index) => {
            const { labelCentroid, pieCentroid, data } = slice;
            return (
                <Text
                    key={index}
                    x={pieCentroid[ 0 ]}
                    y={pieCentroid[ 1 ]}
                    fill={'white'}
                    textAnchor={'middle'}
                    alignmentBaseline={'middle'}
                    fontSize={24}
                    stroke={'black'}
                    strokeWidth={0.2}
                >
                    {data.amount}
                </Text>
            )
        })
    }

    return (
        <PieChart
            style={{ height: 200, width: 200 }}
            valueAccessor={({ item }) => item.amount}
            data={data}
            spacing={0}
            outerRadius={'95%'}
        >
            <Labels/>
        </PieChart>
    )
}
}