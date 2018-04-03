/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {Text, View} from 'react-native'
import Menu from './Menu'
import Paper from './Paper'
import {StackNavigator} from 'react-navigation'

export default StackNavigator({
  Menu: {
    screen: Menu,
    navigationOptions: {
      header: null
    }
  },
  Paper: {
    screen: Paper,
    navigationOptions: {
      header: null
    }
  }
})
