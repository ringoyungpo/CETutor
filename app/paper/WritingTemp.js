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
  writing: {
    directions: string,
    essay : ?string
  }
}
type State = {
  directions: string,
  essay : ?string
}
export default class App extends Component<Props, State> {
  constructor(props: any){
    super(props)
    this.state={
      directions: this.props.writing.directions,
      essay: this.props.writing.essay
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

        <Textarea
          rowSpan={5}
          value={this.state.essay}
          placeholder="Write your answer here..."
          onChangeText={(words) => {this.setState({essay: words});this.props.onSubmit(words)}}
        />

      </View>
    );
  }
}
