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
      questions: Array<{
        optionSelected: ?number,
        options: Array<string>
      }>,
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
                {
                  optionSelected: null,
									options: [
                    '1The news report mainly about A?',
                    '1The news report mainly about B?',
                    '1The news report mainly about C?',
                    '1The news report mainly about D?',
                  ]
                },{
                  optionSelected: null,
									options: [
                    '1The news report mainly about A?',
                    '1The news report mainly about B?',
                    '1The news report mainly about C?',
                    '1The news report mainly about D?',
                  ]
                },{
                  optionSelected: null,
									options: [
                    '1The news report mainly about A?',
                    '1The news report mainly about B?',
                    '1The news report mainly about C?',
                    '1The news report mainly about D?',
                  ]
                },{
                  optionSelected: null,
									options: [
                    '1The news report mainly about A?',
                    '1The news report mainly about B?',
                    '1The news report mainly about C?',
                    '1The news report mainly about D?',
                  ]
                },
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
                {
                  optionSelected: null,
									options: [
                    '2The news report mainly about A?',
                    '2The news report mainly about B?',
                    '2The news report mainly about C?',
                    '2The news report mainly about D?',
                  ]
                },{
                  optionSelected: null,
									options: [
                    '2The news report mainly about A?',
                    '2The news report mainly about B?',
                    '2The news report mainly about C?',
                    '2The news report mainly about D?',
                  ]
                },{
                  optionSelected: null,
									options: [
                    '2The news report mainly about A?',
                    '2The news report mainly about B?',
                    '2The news report mainly about C?',
                    '2The news report mainly about D?',
                  ]
                },
              ]
            },
            {
              moduleTitle: '2What is the news report mainly about?',
              questions: [
                {
                  optionSelected: null,
									options: [
                    '2The news report mainly about A?',
                    '2The news report mainly about B?',
                    '2The news report mainly about C?',
                    '2The news report mainly about D?',
                  ]
                },{
                  optionSelected: null,
									options: [
                    '2The news report mainly about A?',
                    '2The news report mainly about B?',
                    '2The news report mainly about C?',
                    '2The news report mainly about D?',
                  ]
                },{
                  optionSelected: null,
									options: [
                    '2The news report mainly about A?',
                    '2The news report mainly about B?',
                    '2The news report mainly about C?',
                    '2The news report mainly about D?',
                  ]
                },
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
                {
                  optionSelected: null,
									options: [
                    '3The news report mainly about A?',
                    '3The news report mainly about B?',
                    '3The news report mainly about C?',
                    '3The news report mainly about D?',
                  ]
                },{
                  optionSelected: null,
									options: [
                    '3The news report mainly about A?',
                    '3The news report mainly about B?',
                    '3The news report mainly about C?',
                    '3The news report mainly about D?',
                  ]
                },
              ]
            },
            {
              moduleTitle: '3What is the news report mainly about?',
              questions: [
                {
                  optionSelected: null,
									options: [
                    '3The news report mainly about A?',
                    '3The news report mainly about B?',
                    '3The news report mainly about C?',
                    '3The news report mainly about D?',
                  ]
                },{
                  optionSelected: null,
									options: [
                    '3The news report mainly about A?',
                    '3The news report mainly about B?',
                    '3The news report mainly about C?',
                    '3The news report mainly about D?',
                  ]
                },
              ]
            },{
              moduleTitle: '3What is the news report mainly about?',
              questions: [
                {
                  optionSelected: null,
									options: [
                    '3The news report mainly about A?',
                    '3The news report mainly about B?',
                    '3The news report mainly about C?',
                    '3The news report mainly about D?',
                  ]
                },{
                  optionSelected: null,
									options: [
                    '3The news report mainly about A?',
                    '3The news report mainly about B?',
                    '3The news report mainly about C?',
                    '3The news report mainly about D?',
                  ]
                },
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
                {
                  optionSelected: null,
									options: [
                    '4The news report mainly about A?',
                    '4The news report mainly about B?',
                    '4The news report mainly about C?',
                    '4The news report mainly about D?',
                  ]
                },
              ]
            },{
              moduleTitle: '4What is the news report mainly about?',
              questions: [
                {
                  optionSelected: null,
									options: [
                    '4The news report mainly about A?',
                    '4The news report mainly about B?',
                    '4The news report mainly about C?',
                    '4The news report mainly about D?',
                  ]
                },
              ]
            },{
              moduleTitle: '4What is the news report mainly about?',
              questions: [
                {
                  optionSelected: null,
									options: [
                    '4The news report mainly about A?',
                    '4The news report mainly about B?',
                    '4The news report mainly about C?',
                    '4The news report mainly about D?',
                  ]
                },
              ]
            },{
              moduleTitle: '4What is the news report mainly about?',
              questions: [
                {
                  optionSelected: null,
									options: [
                    '4The news report mainly about A?',
                    '4The news report mainly about B?',
                    '4The news report mainly about C?',
                    '4The news report mainly about D?',
                  ]
                },
              ]
            },
          ]
        },
      ],
      sectionSelected: null,
    }
  }

  render() {
    let stateTemp = this.state
    return (
      <View>
        {
          stateTemp.sections.map((sectionValue,sectionIndex)=>(
            <View key={sectionIndex}>
              <CardItem button onPress={()=>{
                stateTemp.sectionSelected = stateTemp.sectionSelected == sectionIndex ? null : sectionIndex
                this.setState(stateTemp)
              }}>
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
                        {sectionValue.directions}
                      </Text>
                    </CardItem>
                    {
                      sectionValue.modules.map((modulesValue,modulesIndex)=>(
                        <View key={modulesIndex}>
                          <CardItem header>
                            <Text>{modulesValue.moduleTitle}</Text>
                          </CardItem>
                          {
                            modulesValue.questions.map((questionValue, questionIndex)=>(
                              <View key={questionIndex}>
                                <CardItem header>
                                  <Text>
                                    {questionIndex + 1}.
                                  </Text>
                                </CardItem>
                                {
                                  questionValue.options.map((optionValue, optionIndex)=>(
                                    <CardItem key={optionIndex} button onPress={()=>{
                                      questionValue.optionSelected = questionValue.optionSelected!==optionIndex?(
                                        optionIndex
                                      ):(
                                        null
                                      )
                                      // console.log(JSON.stringify({
                                      //   sectionIndex: sectionIndex,
                                      //   modulesIndex: modulesIndex,
                                      //   questionIndex: questionIndex,
                                      //   optionIndex: optionIndex,
                                      // }))
                                      console.log(JSON.stringify(
                                        this.state.sections[sectionIndex].modules[modulesIndex].questions[questionIndex].optionSelected
                                      ))

                                      this.setState(stateTemp)
                                    }}>
                                      <Text>{String.fromCharCode(optionIndex+65)}: {optionValue}</Text>
                                      <Right>
                                        <Radio selected={optionIndex===questionValue.optionSelected} />
                                      </Right>
                                    </CardItem>
                                  ))
                                }
                              </View>
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
