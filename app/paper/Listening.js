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
  Right,
  Radio,
} from 'native-base'

type Props = {
}

type State = {
  sections: Array<{
    sectionTitle: string,
    directions: string,
    modules: Array<{
      moduleTitle: string,
      questions: Array<string>,
    }>
  }>,
  sectionSelected: ?number
}

export default class App extends Component<Props, State> {
  constructor(props: Props){
    super(props)
    this.state={
      sections:[
        {
          directions: '1Forf this part,you are allowed 30 minutes to write a short essay on e-learning.Try to imagine what will happen when more and more people study online instead of attending school. You are required to write at least 150 words but no more than 200 words.',
          sectionTitle: 'News Report',
          modules: [
            {
              moduleTitle: '1What is the news report mainly about?',
              questions: [
                '1The news report mainly about A?',
                '1The news report mainly about B?',
                '1The news report mainly about C?',
                '1The news report mainly about D?',
              ]
            },
          ]
        },
        {
          directions: '2Forf this part,you are allowed 30 minutes to write a short essay on e-learning.Try to imagine what will happen when more and more people study online instead of attending school. You are required to write at least 150 words but no more than 200 words.',
          sectionTitle: 'Conversation',
          modules: [
            {
              moduleTitle: '2What is the news report mainly about?',
              questions: [
                '2The news report mainly about A?',
                '2The news report mainly about B?',
                '2The news report mainly about C?',
                '2The news report mainly about D?',
              ]
            },
            {
              moduleTitle: '2What is the news report mainly about?',
              questions: [
                '2The news report mainly about A?',
                '2The news report mainly about B?',
                '2The news report mainly about C?',
                '2The news report mainly about D?',
              ]
            }
          ]
        },
        {
          directions: '3Forf this part,you are allowed 30 minutes to write a short essay on e-learning.Try to imagine what will happen when more and more people study online instead of attending school. You are required to write at least 150 words but no more than 200 words.',
          sectionTitle: 'Passange',
          modules: [
            {
              moduleTitle: '3What is the news report mainly about?',
              questions: [
                '3The news report mainly about A?',
                '3The news report mainly about B?',
                '3The news report mainly about C?',
                '3The news report mainly about D?',
              ]
            },
            {
              moduleTitle: '3What is the news report mainly about?',
              questions: [
                '3The news report mainly about A?',
                '3The news report mainly about B?',
                '3The news report mainly about C?',
                '3The news report mainly about D?',
              ]
            },{
              moduleTitle: '3What is the news report mainly about?',
              questions: [
                '3The news report mainly about A?',
                '3The news report mainly about B?',
                '3The news report mainly about C?',
                '3The news report mainly about D?',
              ]
            },
          ]
        },{
          directions: '4Forf this part,you are allowed 30 minutes to write a short essay on e-learning.Try to imagine what will happen when more and more people study online instead of attending school. You are required to write at least 150 words but no more than 200 words.',
          sectionTitle: 'Record',
          modules: [
            {
              moduleTitle: '4What is the news report mainly about?',
              questions: [
                '4The news report mainly about A?',
                '4The news report mainly about B?',
                '4The news report mainly about C?',
                '4The news report mainly about D?',
              ]
            },{
              moduleTitle: '4What is the news report mainly about?',
              questions: [
                '4The news report mainly about A?',
                '4The news report mainly about B?',
                '4The news report mainly about C?',
                '4The news report mainly about D?',
              ]
            },{
              moduleTitle: '4What is the news report mainly about?',
              questions: [
                '4The news report mainly about A?',
                '4The news report mainly about B?',
                '4The news report mainly about C?',
                '4The news report mainly about D?',
              ]
            },{
              moduleTitle: '4What is the news report mainly about?',
              questions: [
                '4The news report mainly about A?',
                '4The news report mainly about B?',
                '4The news report mainly about C?',
                '4The news report mainly about D?',
              ]
            },
          ]
        },
      ],
      answers: null,
      sectionSelected: null,
    }
  }

  render() {
    return (
      <View>
        {
          this.state.sections.map((sectionValue,sectionIndex)=>(
            <View key={sectionIndex}>
              <CardItem button onPress={()=>{this.setState({sectionSelected: this.state.sectionSelected == sectionIndex ? null : sectionIndex})}}>
                <H3>
                    Section {String.fromCharCode(sectionIndex+65)} {sectionValue.sectionTitle}
                </H3>
              </CardItem>
              {
                this.state.sectionSelected === sectionIndex?(
                  <View>
                    <CardItem header>
                      <Text>
                        Directions:
                      </Text>
                    </CardItem>
                    <CardItem>
                      <Text>
                        {this.state.sections[sectionIndex].directions}
                      </Text>
                    </CardItem>
                    {
                      this.state.sections[sectionIndex].modules.map((modulesValue,modulesIndex)=>(
                        <View key={modulesIndex}>
                          <CardItem header>
                            <Text>{modulesValue.moduleTitle}</Text>
                          </CardItem>
                          {
                            modulesValue.questions.map((questionValue, questionIndex)=>(
                              <CardItem key={questionIndex} button onPress={()=>{console.log(JSON.stringify({
                                sectionIndex: sectionIndex,
                                modulesIndex: modulesIndex,
                                questionIndex: questionIndex,
                              }))}}>
                                <Text>{String.fromCharCode(questionIndex+65)}: {questionValue}</Text>
                                <Right>
                                  <Radio selected={false} />
                                </Right>
                              </CardItem>
                            ))
                          }
                        </View>
                      ))
                    }
                  </View>
                ):null
              }
            </View>
          ))
        }
      </View>
    );
  }
}
