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
type State = {
  directions: string
}

export default class App extends Component<Props, State> {
  constructor(props: any){
    super(props)
    this.state={
      directions: 'Forf this part,you are allowed 30 minutes to write a short essay on e-learning.Try to imagine what will happen when more and more people study online instead of attending school. You are required to write at least 150 words but no more than 200 words.'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.part}>
          Part II Listening Comprehension
        </Text>
        {
          this.props.selected?(
            <View>
              <Text style={styles.directions}>
                {this.state.directions}
              </Text>
            </View>
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
  directions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
