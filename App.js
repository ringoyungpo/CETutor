/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {
  Component
} from 'react'

import AuthStack from './app/auth/AuthStack'
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
  createSwitchNavigator
} from 'react-navigation' // Version can be specified in package.json

export default createSwitchNavigator({
  AuthLoading: {
    screen: AuthLoadingScreen
  },
  App: {
    screen: AppStack
  },
  Auth: {
    screen: AuthStack
  }
}, {
  initialRouteName: 'AuthLoading'
})