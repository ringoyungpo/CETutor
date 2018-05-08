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
  View
} from 'react-native'
import jwt_decode from 'jwt-decode'
import setAuthToken from '../utils/setAuthToken'
import CurrentUserStore from './CurrentUserStore'


class AuthLoadingScreen extends Component < {
  navigation: Function
}, {} > {
  constructor() {
    super()
    this._bootstrapAsync()
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('jwtToken')


    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    console.log(userToken === null)

    if (userToken === null) {
      this.props.navigation.navigate('Auth')
    } else {
      const decoded = jwt_decode(userToken)
      const currentTime = Date.now() / 1000
      if (decoded.exp < currentTime) {
        await AsyncStorage.clear()
        setAuthToken()
        this.props.navigation.navigate('Auth')
      } else {
        setAuthToken(userToken)
        CurrentUserStore.init(decoded)
        this.props.navigation.navigate('App')
      }
    }

  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default AuthLoadingScreen