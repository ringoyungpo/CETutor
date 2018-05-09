/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  CardItem,
  H2,
  Textarea,
} from 'native-base'

type Props = {
  onSubmit: Function,
  translation: {
    directions: string,
    passage: string,
    answer: ?string
  },
}
type State = {
  directions: string,
  passage: string,
  answer : ?string
}

export default class App extends Component<Props, State> {
  constructor(props: any){
    super(props)
    this.state={
      directions: this.props.translation.directions,
      passage:this.props.translation.passage,
      answer: this.props.translation.answer
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

        <CardItem>
          <Text>
            {this.state.passage}
          </Text>
        </CardItem>

        <Textarea
          rowSpan={5}
          value={this.state.answer}
          placeholder="Write your answer here..."
          onChangeText={(words) => {this.setState({answer: words});this.props.onSubmit(words)}}
        />

      </View>
    );
  }
}
