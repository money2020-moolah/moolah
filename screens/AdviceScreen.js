import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { ScrollView, StyleSheet, Text, View} from 'react-native';

import { Card, ListItem, Button } from 'react-native-elements';

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
        <Text>Good Job!</Text>
       </View>
       <View style={styles.failure} elevation={8}>
        <Text>Oh no!</Text>
       </View>
       <View style={styles.success} elevation={8}>
        <Text>Good Job!</Text>
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
    height: 250,
    backgroundColor: '#29f1c3',
    borderRadius: 5,
    marginBottom: 20
  },
  failure: {
    height: 250,
    backgroundColor: '#ff8989',
    borderRadius: 5,
    marginBottom: 20
  }
});
