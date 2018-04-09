/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {Text, View} from 'react-native'
import Menu from './app/Menu'
import Paper from './app/Paper'
import {StackNavigator} from 'react-navigation'

export default StackNavigator({
  Paper: {
    screen: Paper,
    navigationOptions: {
      header: null
    }
  },
  Menu: {
    screen: Menu,
    navigationOptions: {
      header: null
    }
  },
})
