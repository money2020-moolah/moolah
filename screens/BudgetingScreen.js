import React from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import { Slider, Button, Card } from 'react-native-elements';
import { PieChart } from 'react-native-svg-charts';

export default class BudgetingScreen extends React.Component {
  static navigationOptions = {
    title: 'My Budget',
  };

  render() {

    const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

    const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

    const pieData = data
        .filter(value => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: randomColor(),
                onPress: () => console.log('press', index),
            },
            key: `pie-${index}`,
        }))

    return (
      <ScrollView style={styles.container}>

        <View style={{flexDirection: "row"}}>
          <PieChart
              style={ { height: 200, flex: 2 } }
              data={ pieData }
          />
          <View style={{flex: 1, justifyContent: 'center'}}>
            <View>
              <Text>Legend1</Text>
            </View>
            <View>
              <Text>Legend2</Text>
            </View>
            <View>
              <Text>Legend3</Text>
            </View>
            <View>
              <Text>Legend4</Text>
            </View>
            <View>
              <Text>Legend5</Text>
            </View>
          </View>
        </View>

        <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>This month's expected allowance: </Text>
        <Text>$1000</Text>
        <Text> Savings </Text>
          <Slider
            value={30}
            onValueChange={(value) => this.setState({value})} 
            maximumValue = {300} />
          <Text>Value: {30}</Text>
        <Text>Expenditure</Text>
        <Slider
            value={30}
            onValueChange={(value) => this.setState({value})} 
            maximumValue = {300}/>
          <Text>Value: {30}</Text>
          <Text>Investment</Text>
          <Slider
            value={30}
            onValueChange={(value) => this.setState({value})}
            maximumValue = {300} />
          <Text>Value: {30}</Text>
          <Text>Insurance</Text>
          <Slider
            value={30}
            onValueChange={(value) => this.setState({value})} 
            maximumValue = {300}/>
          <Text>Value: {30}</Text>
        </View>

        <Button title="Set or Update Next Month's Budget" />
        <Button title="See Past Budgets" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    padding : 30, 
    alignContent : 'center'
  },
});
