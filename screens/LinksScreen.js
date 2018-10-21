import React from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Slider } from 'react-native-elements'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'My Budget',
  };

  render() {
    return (
      <ScrollView style={styles.container}>

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
