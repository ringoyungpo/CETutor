/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native'

type Props = {
  navigation: any
};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Button title='CET4 Training' onPress={() => this.props.navigation.navigate('Paper',{level: 'CET4', category: 'Training'})}></Button>
        <Button title='CET4 Testing' onPress={() => this.props.navigation.navigate('Paper',{level: 'CET4', category: 'Testing'})}></Button>
        <Button title='CET6 Training' onPress={() => this.props.navigation.navigate('Paper',{level: 'CET6', category: 'Training'})}></Button>
        <Button title='CET6 Testing' onPress={() => this.props.navigation.navigate('Paper',{level: 'CET6', category: 'Testing'})}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
