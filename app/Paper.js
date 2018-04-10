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
  partSelected: ?string,
  answers: {
    writing: ?string,
    translation: ?string
  }
}
export default class Paper extends Component<Props, State>{
  constructor(props: any){
    super(props)
    this.state = {
      partSelected: '',
      answers: {
        writing: '',
        translation: ''
      }
    }
  }

  _partSelect = (part) => () => {
    this.setState({
      partSelected: this.state.partSelected === part?null:part
    })
  }

  render = ()=>(
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <TouchableHighlight onPress={this._partSelect('Writing')}>
          <View style={styles.container}>
            <Text style={styles.part}>
              Part I Writing
            </Text>
          </View>
        </TouchableHighlight>
        <Writing
          onSubmit={(text)=>{this.setState({answers: {...this.state.answers, writing: text}})}}
          isSelected={this.state.partSelected === 'Writing'}
        />

        <TouchableHighlight onPress={this._partSelect('Listening')}>
          <View style={styles.container}>
            <Text style={styles.part}>
              Part II Listening Comprehension
            </Text>
          </View>
        </TouchableHighlight>
        <Listening
          // onSubmit={(text)=>{this.setState({answers: {...this.state.answers, writing: text}})}}
          isSelected={this.state.partSelected === 'Listening'}
        />

        <TouchableHighlight onPress={this._partSelect('Reading')}>
          <Reading selected={this.state.partSelected === 'Reading'}/>
        </TouchableHighlight>

        <TouchableHighlight onPress={this._partSelect('Translation')}>
          <View style={styles.container}>
            <Text style={styles.part}>
              Part IV translation
            </Text>
          </View>
        </TouchableHighlight>
        <Translation
          onSubmit={(text)=>{this.setState({answers: {...this.state.answers, translation: text}})}}
          isSelected={this.state.partSelected === 'Translation'}
        />

        <Text>
          {this.state.answers.writing}
        </Text>
        <Text>
          {this.state.answers.translation}
        </Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  contentContainer: {
    paddingVertical: 20
  },
  part: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
