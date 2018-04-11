/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableHighlight,
} from 'react-native'
import {
  Header,
  Container,
  Content,
  Text,
  Card,
  CardItem,
  H2,
} from 'native-base'
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
      partSelected: 'Writing',
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
    // console.log(part);
  }

  render = ()=>(
    <Container>
      <Header/>
      <Content>
        <Card>
          <CardItem button onPress={this._partSelect('Writing')}>
            <H2>
              Part I Writing
            </H2>
          </CardItem>
          {
            this.state.partSelected === 'Writing'?(
              <Writing
                onSubmit={(text)=>{console.log(text);this.setState({answers: {...this.state.answers, writing: text}})}}>
              </Writing>
            ):null
          }
          <CardItem>
            <H2 onPress={this._partSelect('Listening')}>
              Part II Listening Comprehension
            </H2>
          </CardItem>
          {
            this.state.partSelected === 'Listening'?(
              <Listening
                // onSubmit={(text)=>{this.setState({answers: {...this.state.answers, writing: text}})}}
              />
            ):null
          }
          <CardItem>
            <H2 onPress={this._partSelect('Reading')}>
              Part III Reading comprehension
            </H2>
          </CardItem>
          {
            this.state.partSelected === 'Reading'?(
              <Reading
                // onSubmit={(text)=>{this.setState({answers: {...this.state.answers, writing: text}})}}
              />
            ):null
          }
          <CardItem button onPress={this._partSelect('Translation')}>
            <H2>
              Part IV translation
            </H2>
          </CardItem>
          {
            this.state.partSelected === 'Translation'?(
              <Translation
                onSubmit={(text)=>{this.setState({answers: {...this.state.answers, translation: text}})}}>
              </Translation>
            ):null
          }
        </Card>

        <Text>
          {this.state.answers.writing}
        </Text>
        <Text>
          {this.state.answers.translation}
        </Text>
      </Content>
    </Container>
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
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
