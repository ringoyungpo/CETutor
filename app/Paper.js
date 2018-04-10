/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native'
import {TabNavigator} from 'react-navigation'
import Writing from './paper/Writing'
import Listening from './paper/Listening'
import Reading from './paper/Reading'
import Translation from './paper/Translation'

type Props = {}
type State = {
  selectPart: ?string,
  answers: {
    writing: ?string,
    translation: ?string
  }
}
export default class Paper extends Component<Props, State>{
  constructor(props: any){
    super(props)
    this.state = {
      selectPart: null,
      answers: {
        writing: '',
        translation: ''
      }
    }
  }

  _partSelect = (part) => () => {
    this.setState({
      selectPart: this.state.selectPart === part ? null : part
    })
  }

  render = ()=>(
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableHighlight onPress={this._partSelect('Writing')}>
        <Writing selected={this.state.selectPart === 'Writing'}
          onSubmit={(text)=>{this.setState({answers: {...this.state.answers, writing: text}})}}/>
      </TouchableHighlight>
      <TouchableHighlight onPress={this._partSelect('Listening')}>
        <Listening selected={this.state.selectPart === 'Listening'}/>
      </TouchableHighlight>
      <TouchableHighlight onPress={this._partSelect('Reading')}>
        <Reading selected={this.state.selectPart === 'Reading'}/>
      </TouchableHighlight>
      <TouchableHighlight onPress={this._partSelect('Translation')}>
        <Translation selected={this.state.selectPart === 'Translation'}
          onSubmit={(text)=>{this.setState({answers: {...this.state.answers, translation: text}})}}/>
      </TouchableHighlight>
      <Text>
        {this.state.answers.writing}
      </Text>
      <Text>
        {this.state.answers.translation}
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
