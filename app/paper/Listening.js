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
    directions: string,
    questions: Array<{
      question: string,
      options: Array<string>,
    }>
  }>,
  sectionSelected: ?string
}

export default class App extends Component<Props, State> {
  constructor(props: Props){
    super(props)
    this.state={
      sections:[
        {
          directions: 'Forf this part,you are allowed 30 minutes to write a short essay on e-learning.Try to imagine what will happen when more and more people study online instead of attending school. You are required to write at least 150 words but no more than 200 words.',
          questions: [
            {
              question: 'What is the news report mainly about?',
              options: [
                'The news report mainly about A?',
                'The news report mainly about B?',
                'The news report mainly about C?',
                'The news report mainly about D?',
              ]
            },
            {
              question: 'What is the news report mainly about?',
              options: [
                'The news report mainly about A?',
                'The news report mainly about B?',
                'The news report mainly about C?',
                'The news report mainly about D?',
              ]
            }
          ]
        },
        {
          directions: 'Forf this part,you are allowed 30 minutes to write a short essay on e-learning.Try to imagine what will happen when more and more people study online instead of attending school. You are required to write at least 150 words but no more than 200 words.',
          questions: [
            {
              question: 'What is the news report mainly about?',
              options: [
                'The news report mainly about A?',
                'The news report mainly about B?',
                'The news report mainly about C?',
                'The news report mainly about D?',
              ]
            },
            {
              question: 'What is the news report mainly about?',
              options: [
                'The news report mainly about A?',
                'The news report mainly about B?',
                'The news report mainly about C?',
                'The news report mainly about D?',
              ]
            }
          ]
        },
        {
          directions: 'Forf this part,you are allowed 30 minutes to write a short essay on e-learning.Try to imagine what will happen when more and more people study online instead of attending school. You are required to write at least 150 words but no more than 200 words.',
          questions: [
            {
              question: 'What is the news report mainly about?',
              options: [
                'The news report mainly about A?',
                'The news report mainly about B?',
                'The news report mainly about C?',
                'The news report mainly about D?',
              ]
            },
            {
              question: 'What is the news report mainly about?',
              options: [
                'The news report mainly about A?',
                'The news report mainly about B?',
                'The news report mainly about C?',
                'The news report mainly about D?',
              ]
            }
          ]
        }
      ],
      answers: null,
      sectionSelected: 'a'
    }
  }

  render() {
    return (
      <View>
        {
          this.state.sections.map((sectionUnit,sectionIndex)=>(
            <View key={sectionIndex}>
              <CardItem button onPress={()=>{this.setState({sectionSelected: this.state.sectionSelected == String.fromCharCode(sectionIndex+65) ? null : String.fromCharCode(sectionIndex+65)})}}>
                <H3>
                    Section {String.fromCharCode(sectionIndex+65)}
                </H3>
              </CardItem>
              {
                this.state.sectionSelected === String.fromCharCode(sectionIndex+65)?(
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
                      this.state.sections[sectionIndex].questions.map((questionUnit,questionIndex)=>(
                        <View key={questionIndex}>
                          <CardItem header>
                            <Text>{questionUnit.question}</Text>
                          </CardItem>
                          {
                            questionUnit.options.map((option, optionIndex)=>(
                              <CardItem key={optionIndex} button onPress={()=>{console.log(String.fromCharCode(sectionIndex+65) + questionIndex.toString() + String.fromCharCode(optionIndex+65))}}>
                                <Text>{String.fromCharCode(optionIndex+65)}: {option}</Text>
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
