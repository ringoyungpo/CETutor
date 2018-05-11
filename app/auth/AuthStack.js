/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react'
import {
  createStackNavigator
} from 'react-navigation' // Version can be specified in package.json
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View
} from 'react-native'
import SignInScreen from './SignInScreen'
import SignUpScreen from './SignUpScreen'

const AuthStack = createStackNavigator({
  SignIn: {
    screen: SignInScreen
  },
  SignUp: {
    screen: SignUpScreen
  }
})
export default AuthStack