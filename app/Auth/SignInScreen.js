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
  TextInput,
  Text,
  View
} from 'react-native'
import SignInInput from './SignInStore'
// import {observer} from 'mobx-react'

// @observer
class SignInScreen extends Component<{navigation: Function}, {}> {
  static navigationOptions = {
    title: 'Please sign in'
  }

  render() {
    const {nickname, password} = SignInInput
    return (
      <View style={styles.container}>
        <Text>{nickname}</Text>
        {/* <TextInput
          value={nickname}
          onChangeText={value => onInputChange('nickname', value)}
        /> */}
        <Text>{password}</Text>
        {/* <TextInput
          value={password}
          onChangeText={value => onInputChange('password', value)}
        /> */}
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    )
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc')
    this.props.navigation.navigate('App')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default SignInScreen
