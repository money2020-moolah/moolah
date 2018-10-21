import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput} from 'react-native';
import { Slider, Button, Card } from 'react-native-elements';
import { PieChart } from 'react-native-svg-charts';
import { Input } from 'react-native-elements';

export default class BudgetingScreen extends React.Component {
  static navigationOptions = {
    title: 'My Budget',
  };

  render() {

    const data = [ 20, 30, 10, 30, 10 ]


    const randomColor = ['#600080',  '#9900cc', '#c61aff', '#d966ff', '#ecb3ff'];

    const pieData = data
        .filter(value => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: randomColor[index],
                onPress: () => console.log('press', index),
            },
            key: `pie-${index}`,
        }))

    return (
      <ScrollView style={styles.container}>

        <View style={{flexDirection: "row", marginBottom : 20 }}>
          <PieChart
              style={ { height: 200, flex: 2 } }
              data={ pieData }
          />
          <View style={{flex: 1, justifyContent: 'center'}}>
            <View  style={{ 
                flexDirection: 'row', flexWrap:'wrap' }}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap:'wrap',
                height: 10,
                width: 10,
                backgroundColor: '#600080'
              }}/>
              <Text>Savings</Text>
            </View>
            <View  style={{
                flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                height: 10,
                width: 10,
                backgroundColor: '#9900cc'
              }}/>
              <Text>Food</Text>
            </View>
            <View  style={{
                flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                height: 10,
                width: 10,
                backgroundColor: '#c61aff'
              }}/>
              <Text>Leisure</Text>
            </View>
            <View  style={{
                flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                height: 10,
                width: 10,
                backgroundColor: '#d966ff'
              }}/>
              <Text>Transport</Text>
            </View>
            <View   style={{
                flexDirection: 'row', }}>
            <View
              style={{
                flexDirection: 'row',
                height: 10,
                width: 10,
                backgroundColor: '#ecb3ff'
              }}/>
              <Text>Others</Text>
            </View>
          </View>
        </View>

        
         <View style={styles.fieldsBox}>
          <View style = {{flexDirection: 'row' , justifyContent: 'space-between',}}> 
            <Text style={styles.textStyle}>Savings</Text>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.textBox}
            />
          </View>
          <View style = {{flexDirection: 'row' , justifyContent: 'space-between',}}> 
            <Text style={styles.textStyle}>Food</Text>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.textBox}
            />
            </View>

             <View style = {{flexDirection: 'row', justifyContent: 'space-between', }}> 
            <Text style={styles.textStyle}>Leisure</Text>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.textBox}
            />
            </View>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', }}> 
            <Text style={styles.textStyle}>Transport</Text>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.textBox}
            />
            </View>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', }}> 
            <Text style={styles.textStyle}>Others</Text>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.textBox}
            />
            </View>

              <Button buttonStyle={{justifyContent: 'center', borderRadius: 5, marginBottom: 5, marginTop : 5  }} title="Set or Update Next Month's Budget" />

<Button buttonStyle={{ justifyContent: 'center', borderRadius: 5}} title="See Past Budgets" />
          </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#fff',
    padding : 30, 
    alignContent : 'center'
  },
  fieldsBox: {
    paddingVertical: 25,
    paddingHorizontal: 20,
    flex: 1
  },

  textBox: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    padding: 5,
    fontSize: 10,
    height: 20,
    width: 100 ,
    alignSelf: 'stretch'
  }
});
