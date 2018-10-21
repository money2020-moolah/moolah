import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import BudgetingScreen from '../screens/BudgetingScreen';
import AdviceScreen from '../screens/AdviceScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import SvgUri from 'react-native-svg-uri';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <SvgUri
      width="24"
      height="24"
      source={require('../assets/images/home.svg')}
    />
  ),
};

const TransactionsStack = createStackNavigator({
  Transactions: TransactionsScreen,
});

TransactionsStack.navigationOptions = {
  tabBarLabel: 'Transactions',
  tabBarIcon: ({ focused }) => (
    <SvgUri
      width="24"
      height="24"
      source={require('../assets/images/transactions.svg')}
    />
  ),
};

const BudgetingStack = createStackNavigator({
  Budgeting: BudgetingScreen,
});

BudgetingStack.navigationOptions = {
  tabBarLabel: 'Budgeting',
  tabBarIcon: ({ focused }) => (
    <SvgUri
      width="24"
      height="24"
      source={require('../assets/images/budget.svg')}
    />
  ),
};

const AdviceStack = createStackNavigator({
  Advice: AdviceScreen,
});

AdviceStack.navigationOptions = {
  tabBarLabel: 'Advice',
  tabBarIcon: ({ focused }) => (
    <SvgUri
      width="24"
      height="24"
      source={require('../assets/images/advice.svg')}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  TransactionsStack,
  BudgetingStack,
  AdviceStack,
});
