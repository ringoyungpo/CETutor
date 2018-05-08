/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react'
import {
  StackNavigator,
  SwitchNavigator
} from 'react-navigation' // Version can be specified in package.json
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
  Text
} from 'react-native'
import CurrentUserStore from './CurrentUserStore'

class HomeScreen extends Component < {
  navigation: Function
}, {} > {
  static navigationOptions = {
    title: 'Welcome to the app!'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(CurrentUserStore)}</Text>
        <Text>app here</Text>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    )
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other')
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear()
    this.props.navigation.navigate('Auth')
  }
}

class OtherScreen extends Component < {
  navigation: Function
}, {} > {
  static navigationOptions = {
    title: 'Lots of features here:)'
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
        <StatusBar barStyle="default" />
      </View>
    )
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear()
    this.props.navigation.navigate('Auth')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const AppStack = StackNavigator({
  Home: HomeScreen,
  Other: OtherScreen
})
export default AppStack