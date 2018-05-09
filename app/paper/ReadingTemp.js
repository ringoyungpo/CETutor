/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'

import {
  Text,
  View,
  CardItem,
  H3,
  Textarea,
} from 'native-base'

type Props = {
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
      <View>
        <CardItem>
          <Text>
            {this.state.directions}
          </Text>
        </CardItem>
        {/* {
          this.props.selected?(
            <CardItem>
              <Text>
                {this.state.directions}
              </Text>
            </CardItem>
          ): null
        } */}
      </View>
    );
  }
}
