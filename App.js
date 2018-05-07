/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {
  Component
} from 'react'

import Menu from './app/Menu'
import Paper from './app/Paper'
import AuthStack from './app/Auth/AuthStack'
import AppStack from './app/navigation/AppStack'
import AuthLoadingScreen from './app/navigation/AuthLoadingScreen'

import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View
} from 'react-native'
import {
  StackNavigator,
  SwitchNavigator
} from 'react-navigation' // Version can be specified in package.json

export default SwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack
}, {
  initialRouteName: 'AuthLoading'
})