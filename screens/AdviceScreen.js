import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { ScrollView, StyleSheet, Text, View} from 'react-native';

import { Card, ListItem, Button } from 'react-native-elements';

import SvgUri from 'react-native-svg-uri';

export default class AdviceScreen extends React.Component {
  static navigationOptions = {
    title: 'Advice',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return ( 

      <ScrollView style={styles.container}>

       <View style={styles.success} elevation={8}>
        <View style={{padding: 10,paddingTop: 20}} >
          <Text style={styles.titleText}>Good Job!</Text>
          <Text>Keep it up! You are half way through your savings goal for this month.</Text>
          <View style={{paddingTop: 50,  flex: 1,
           flexDirection: 'row',justifyContent:'flex-end' }}>
          <SvgUri
              width="50"
              height="50"
              source={require('../assets/images/budget.svg')}
            />
            </View>
        </View>
       </View>
       <View style={styles.failure} elevation={8}>
       <View style={{padding: 10,paddingTop: 20}} >
        <Text style={styles.titleText} >Oh no!</Text>
          <Text>You have spend more on food
            than what you expected this month.</Text>
          </View>
          <View style={{paddingTop: 50,  flex: 1, paddingRight: 5,
           flexDirection: 'row',justifyContent:'flex-end' }}>
          <SvgUri
              width="50"
              height="50"
              source={require('../assets/images/unhappy.svg')}
            />
            </View>
       </View>
       <View style={styles.success} elevation={8}>
       <View style={{padding: 10,paddingTop: 20}} >
        <Text style={styles.titleText} >Good Job! </Text>
        <Text>You have saved more than expected this month!</Text>
        <View style={{paddingTop: 50,  flex: 1,
           flexDirection: 'row',justifyContent:'flex-end' }}>
          <SvgUri
              width="50"
              height="50"
              source={require('../assets/images/budget.svg')}
            />
            </View>
        </View>
       </View>

     
  
    </ScrollView>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    padding: 5,
    backgroundColor: '#fff',
  },
  success: {
    height: 200,
    backgroundColor: '#29f1c3',
    borderRadius: 5,
    marginBottom: 20
  },
  failure: {
    height: 200,
    backgroundColor: '#ff8989',
    borderRadius: 5,
    marginBottom: 20
  }, 
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
