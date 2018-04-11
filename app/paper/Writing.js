/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Text,
  Card,
  CardItem,
  H2,
  View,
  Textarea,
} from 'native-base'

type Props = {
  onSubmit: Function,
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
      <View>
        <CardItem header>
          <Text>
            Directions:
          </Text>
        </CardItem>

        <CardItem>
          <Text>
            {this.state.directions}
          </Text>
        </CardItem>

        <Textarea rowSpan={5} placeholder="Write your answer here..."
        onChangeText={(text) => {this.props.onSubmit(text)}}/>

      </View>
    );
  }
}
