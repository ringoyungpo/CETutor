/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native'

type Props = {
  selected: boolean,
  onSubmit: Function
}
type State = {
  directions: string,
  text ?: string
}
export default class App extends Component<Props, State> {
  constructor(props: any){
    super(props)
    this.state={
      directions:'Forf this part,you are allowed 30 minutes to write a short essay on e-learning.Try to imagine what will happen when more and more people study online instead of attending school. You are required to write at least 150 words but no more than 200 words.',
      text: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.part}>
          Part I Writing
        </Text>
        {
          this.props.selected?(
            <View>
              <Text style={styles.question}>
                {this.state.directions}
              </Text>
              <TextInput
                multiline = {true}
                numberOfLines = {4}
                onChangeText={(text) => {this.setState({text});this.props.onSubmit(text)}}
                value={this.state.text}
                editable = {true}
                maxLength = {40}/>
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
  question: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  answer: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1
  }
})
