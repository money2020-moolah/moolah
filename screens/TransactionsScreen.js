import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import getTransactionHistory from '../apis/yodlee';

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
        <View style={{flexDirection: "row"}}>
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
        {
            this.state.transactions.map((transaction, index) => {
              return (
                <Card key={index}>
                  <View>
                    <Text>{transaction.category}</Text>
                    <Text style={{textAlign: 'right'}}>{transaction.baseType == 'CREDIT' ? '+' : '-'} ${transaction.amount.amount}</Text>
                  </View>
                </Card>
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
