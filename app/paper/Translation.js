/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
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
      directions:'乌镇是浙江的一座古老水镇，坐落在京杭大运河河畔。这是一处迷人的地方，有许多古桥、中式旅店和餐馆。在过去一千年里，乌镇的水系和生活方式并未经历多少变化，是一座展现古文明的博物馆。乌镇所有房屋都用石木建筑。数百年来，当地沿着河边建起了住宅和集市。无数宽敞美丽的庭院藏身于屋舍之间，游客们每到一处都会有惊喜的发现。',
      text: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.part}>
          Part IV translation
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
});
