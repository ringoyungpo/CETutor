/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

type Props = {
  selected: boolean
}
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.part}>
          Part II Listening Comprehension
        </Text>
        {
          this.props.selected?(
            <Text style={styles.section}>
              Listening
            </Text>
          ): null
        }
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
  part: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  section: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
