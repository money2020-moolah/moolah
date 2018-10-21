import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { ScrollView, StyleSheet, Text, View} from 'react-native';

import { Card, ListItem, Button } from 'react-native-elements';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Advice',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return ( 

      <ScrollView style={styles.container}>

       <View style={{height: 250, borderColor: 'green', borderRadius: 5, borderWidth: 1,  marginBottom: 20}} >
        <Text>Good Job!</Text>
       </View>
       <View style={{height: 250, borderColor: 'red', borderRadius: 5, borderWidth: 1, marginBottom: 20}} >
       <Text>Oh no!</Text>
       </View>
       <View style={{height: 250, borderColor:  'green', borderRadius: 5, borderWidth: 1, marginBottom: 20}} >
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
});
