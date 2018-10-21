import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { WebBrowser, Icon } from 'expo';
import { MonoText } from '../components/StyledText';
import  LineChartExample  from '../components/LineChart';
import { Avatar, Button, Card } from 'react-native-elements';
import { CreditCardInput } from 'react-native-credit-card-input';
import getTransactionHistory from '../apis/yodlee';
import  PieChartExample  from '../components/PieChart';
import constants from '../constants/Colors';
import PopupDialog, { ScaleAnimation, DialogTitle, DialogButton } from 'react-native-popup-dialog';

const scaleAnimation = new ScaleAnimation();

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Moolah',
  };

  showScaleAnimationDialog = () => {
    this.scaleAnimationDialog.show();
  }

  render() {
    getTransactionHistory().then((response) => {
      console.log(response);
    });

    const dimensions = Dimensions.get('window');
    const cardWidth = dimensions.width;
    const smallerCardWidth = dimensions.width - 50;

    return (
      <View style={styles.container}>

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'stretch',
          padding: 5,
          backgroundColor: '#0e273c',
         }}>
          <Image
            style={{flex:1, width: cardWidth, height: 270, alignSelf: 'center'}}
            source={require('../assets/images/visa-card.png')}
            resizeMode="contain"
            elevation={1}
          />
          </View>

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

          <View style={{backgroundColor: '#FFF', padding: 20, margin: 10, borderRadius: 10}} elevation={5}>
            <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
              <Text style={{color: constants.secondary, fontSize: 20, marginBottom: 20}}>Budget For Oct</Text>
              <View
                style={{backgroundColor: constants.secondary, borderRadius: 90, height: 21, width: 21}}
                onPress={this.showScaleAnimationDialog}
              ><Text style={{color: "white", marginLeft: 6}}>?</Text></View>

            </View>

            
            <View style={{flexDirection:'row'}}>

              <View style={{marginTop: 60}}>
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                  <View style={{height: 10, width: 10, backgroundColor: "#600080", marginTop: 6}}></View><Text> Savings</Text>
                </View>
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                  <View style={{height: 10, width: 10, backgroundColor: "#9900cc", marginTop: 6}}></View><Text> Leisure</Text>
                </View>
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                  <View style={{height: 10, width: 10, backgroundColor: "#c61aff", marginTop: 6}}></View><Text> Food</Text>
                </View>
              </View>
              
              <PieChartExample></PieChartExample>
              
              <View style={{marginTop: 70}}>
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                  <View style={{height: 10, width: 10, backgroundColor: "#d966ff", marginTop: 6}}></View><Text> Transport</Text>
                </View>
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                  <View style={{height: 10, width: 10, backgroundColor: "#ecb3ff", marginTop: 6}}></View><Text> Others</Text>
                </View>
              </View>

            </View>

          </View>

          <View style={{backgroundColor: '#FFF', padding: 20, margin: 10, borderRadius: 10}} elevation={5}>
          <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
              <Text style={{color: constants.secondary, fontSize: 20, marginBottom: 20}}>Current Spending</Text>
              <View
                style={{backgroundColor: constants.secondary, borderRadius: 90, height: 21, width: 21}}
                onPress={this.showScaleAnimationDialog}
              ><Text style={{color: "white", marginLeft: 6}}>?</Text></View>

            </View>
            <Image
              style={{flex:1, width: smallerCardWidth, height: 230, alignSelf: 'center'}}
              source={require('../assets/images/current-spending.png')}
              resizeMode="contain"
              elevation={1}
            />
          </View>

          <View style={{backgroundColor: '#FFF', padding: 20, margin: 10, borderRadius: 10}} elevation={5}>
          <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
              <Text style={{color: constants.secondary, fontSize: 20, marginBottom: 20}}>Balance and Allowance History</Text>
              <View
                style={{backgroundColor: constants.secondary, borderRadius: 90, height: 21, width: 21}}
                onPress={this.showScaleAnimationDialog}
              ><Text style={{color: "white", marginLeft: 6}}>?</Text></View>

            </View>
            <Image
              style={{flex:1, width: smallerCardWidth, height: 230, alignSelf: 'center'}}
              source={require('../assets/images/balance-history.png')}
              resizeMode="contain"
              elevation={1}
            />
          </View>

          <View style={{backgroundColor: '#FFF', padding: 20, margin: 10, borderRadius: 10}} elevation={5}>
          <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
              <Text style={{color: constants.secondary, fontSize: 20, marginBottom: 20}}>Factors Affecting Credit</Text>
              <View
                style={{backgroundColor: constants.secondary, borderRadius: 90, height: 21, width: 21}}
                onPress={this.showScaleAnimationDialog}
              ><Text style={{color: "white", marginLeft: 6}}>?</Text></View>

            </View>
            <Image
              style={{flex:1, width: smallerCardWidth, height: 230, alignSelf: 'center'}}
              source={require('../assets/images/credit-factors.png')}
              resizeMode="contain"
              elevation={1}
            />
          </View>
       
        </ScrollView>

        <PopupDialog
          dialogTitle={<DialogTitle title="Budgeting" />}
          ref={(popupDialog) => {
            this.scaleAnimationDialog = popupDialog;
          }}
          dialogAnimation={scaleAnimation}
        >
          <View style={styles.dialogContentView}>
            <Text style={{padding: 10}}>Budgeting is the process of creating a plan to spend your money. Creating this plan allows you to determine in advance whether you will have enough money to do the things you need to do or would like to do.</Text>
          </View>
        </PopupDialog>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },

  my_container:{
    justifyContent: 'center',
    alignItems: 'center' 

  },
  contentContainer: {
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
