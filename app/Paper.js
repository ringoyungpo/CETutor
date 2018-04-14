/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {
  Header,
  Container,
  Content,
  Text,
  Card,
  CardItem,
  H1,
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
      partSelected: null,
      answers: {
        writing: null,
        translation: null,
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
          <CardItem>
            <H1>
              Paper
            </H1>
          </CardItem>
          <CardItem button onPress={this._partSelect('Writing')}>
            <H2>
              Part I Writing
            </H2>
          </CardItem>
          {
            this.state.partSelected === 'Writing'?(
              <Writing
                value={this.state.answers.writing}
                onSubmit={(text)=>{this.setState({answers: {...this.state.answers, writing: text}})}}
              />

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
              Part IV Translation
            </H2>
          </CardItem>
          {
            this.state.partSelected === 'Translation'?(
              <Translation
                value={this.state.answers.translation}
                onSubmit={(text)=>{this.setState({answers: {...this.state.answers, translation: text}})}}
              />
            ):null
          }
        </Card>

        <Card>
          <CardItem>
            <H1>
              Answer Sheet
            </H1>
          </CardItem>
          <CardItem>
            <H2>
              Part I Writing
            </H2>
          </CardItem>
          {
            this.state.answers.writing&&(
              this.state.answers.writing.replace(/(^\s*)|(\s*$)/g, "").length !==0
            )?(
              <CardItem>
                <Text>
                  {this.state.answers.writing}
                </Text>
              </CardItem>
            ):null
          }
          <CardItem>
            <H2>
              Part II Listening Comprehension
            </H2>
          </CardItem>
          <CardItem>
            <H2>
              Part III Reading Comprehension
            </H2>
          </CardItem>
          <CardItem>
            <H2>
              Part IV Translation
            </H2>
          </CardItem>
          {
            this.state.answers.translation&&(
              this.state.answers.translation.replace(/(^\s*)|(\s*$)/g, "").length !==0
            )?(
              <CardItem>
                <Text>
                  {this.state.answers.translation}
                </Text>
              </CardItem>
            ):null
          }
        </Card>
      </Content>
    </Container>
  )
}
