import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import  LineChartExample  from '../components/LineChart';
import { Avatar, Button, Card } from 'react-native-elements';
import { CreditCardInput } from 'react-native-credit-card-input';
import getTransactionHistory from '../apis/yodlee';
import  PieChartExample  from '../components/PieChart';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Moolah',
  };

  render() {
    getTransactionHistory().then((response) => {
      console.log(response);
    });
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'stretch',
          padding: 5
         }}>
          <View style={{height: 250, backgroundColor: 'steelblue', marginBottom: 20}} />
         </View>
          <View style={{flexDirection: "row",marginBottom: 20}}>
          <View style={{flex: 1, height: 80, backgroundColor: 'powderblue'}}>
            <Text>Allowance</Text>
            <Text style={{fontSize: 25}}>$150.00</Text>
          </View>
          <View style={{flex: 1, height: 80, backgroundColor: 'skyblue'}}>
            <Text>Balance</Text>
            <Text style={{fontSize: 25}}>$139.76</Text>
          </View>
          <View style={{flex: 1, height: 80, backgroundColor: 'steelblue'}}>
            <Text>Health</Text>
            <Text style={{fontSize: 25}}>90.57%</Text>
          </View>
        </View>
        <PieChartExample></PieChartExample>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  my_container:{
    justifyContent: 'center',
    alignItems: 'center' 

  },
  contentContainer: {
    paddingTop: 30,
  
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
