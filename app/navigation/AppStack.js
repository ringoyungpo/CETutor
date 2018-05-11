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
  View,
  Text
} from 'react-native'
import CurrentUserStore from './CurrentUserStore'

import HomeScreen from '../home/HomeScreen'
import PaperScreen from '../paper/PaperScreen'

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

const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Paper: {
    screen: PaperScreen
  },
  Other: {
    screen: OtherScreen
  }
})
export default AppStack