/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {StackNavigator, SwitchNavigator} from 'react-navigation' // Version can be specified in package.json
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View
} from 'react-native'
import SignInScreen from './SignInScreen'

const AuthStack = StackNavigator({SignIn: SignInScreen})
export default AuthStack
