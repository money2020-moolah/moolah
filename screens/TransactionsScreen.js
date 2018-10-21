import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import getTransactionHistory from '../apis/yodlee';
import constants from '../constants/Colors';
import { WebBrowser, Icon } from 'expo';

export default class TransactionsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    };

    getTransactionHistory().then(transactionHistory => {
      this.setState({transactions: transactionHistory.transaction});
    });
  }
  
  static navigationOptions = {
    title: 'Transactions',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{flexDirection: "row" ,marginBottom: 20, marginTop: 20, justifyContent: 'center'}}>
          <View style={{flex: 1, paddingLeft: 10}}>
            <View style={{backgroundColor: '#FFF', padding: 20, marginRight: 10, borderRadius: 5, height: 150}} elevation={5}>
              <Text style={{color: constants.secondary, paddingTop: 40}}>Balance</Text>
              <Text style={{fontSize: 25, color: constants.primary}}>$150.00</Text>
            </View>
          </View>
          <View style={{flex: 1, height: 95}}>
            <View style={{backgroundColor: '#FFF', padding: 20, marginRight: 10, borderRadius: 5}} elevation={5}>
              <Text style={{color: constants.secondary}}>Allowance</Text>
              <Text>
                <Text>$150.00 </Text>
                <Icon.Ionicons
                  name="md-arrow-dropup"
                  size={26}
                  color="#47a454"
                />
              </Text>
              <Text style={{color: constants.secondary, marginTop: 14}}>Health</Text><Text style={{color:"#47a454"}}>90.67%</Text>
            </View>
          </View>
        </View>
        {
            this.state.transactions.map((transaction, index) => {
              return (
                <View key={index} style={{backgroundColor: '#FFF', padding: 20, margin: 10, borderRadius: 10, flexDirection: "row", borderLeftColor: transaction.baseType == 'CREDIT' ? '#7befb2' : '#ff9478', borderLeftWidth: 10}} elevation={5}>
                  <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                    <View>
                      <Text style={{fontWeight: "bold"}}>{transaction.description.simple}</Text>
                      <Text>{transaction.category}</Text>
                    </View>
                    <View>
                      <Text style={{color: transaction.baseType == 'CREDIT' ? '#7befb2' : '#ff9478' }}>{transaction.baseType == 'CREDIT' ? '+' : '-'} ${transaction.amount.amount}</Text>
                    </View>
                  </View>
                </View>
              );
            })
         }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
