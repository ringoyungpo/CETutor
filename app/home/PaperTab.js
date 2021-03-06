/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react'
import {
  createBottomTabNavigator
} from 'react-navigation' // Version can be specified in package.json
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View
} from 'react-native'
import HomeScreen from './HomeScreen'
import HistoryScreen from './HistoryScreen'
import InfoScreen from './InfoScreen'

const PaperTab = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  History: {
    screen: HistoryScreen
  },
  Info: {
    screen: InfoScreen
  }
})
export default PaperTab