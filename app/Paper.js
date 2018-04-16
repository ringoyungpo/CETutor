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
  H3,
} from 'native-base'
import {TabNavigator} from 'react-navigation'
import Writing from './paper/Writing'
import Listening from './paper/Listening'
import Reading from './paper/Reading'
import Translation from './paper/Translation'

type Props = {}
type State = {
  partSelected: ?string,
  paperData: {
    writing: ?string,
    listening: ?{
      sections: ?Array<{
        sectionTitle: string,
        directions: string,
        modules: Array<{
          moduleTitle: string,
          questions: Array<{
            optionSelected: ?number,
            options: Array<string>
          }>,
        }>
      }>
    },
    translation: ?string
  }
}
export default class Paper extends Component<Props, State>{
  constructor(props: any){
    super(props)
    this.state = {
      partSelected: null,
      paperData: {
        writing: null,
        listening: {
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
          ]
        },
        translation: null,
      }
    }
  }

  _partSelect = (stateTemp, part) => () => {
    stateTemp.partSelected = stateTemp.partSelected === part?null:part
    this.setState(stateTemp)
    // console.log(part);
  }

  render(){
    const stateTemp = this.state
    return (
      <Container>
        <Header/>
        <Content>
          <Card>
            <CardItem>
              <H1>
                Paper
              </H1>
            </CardItem>
            <CardItem button onPress={this._partSelect(stateTemp,'Writing')}>
              <H2>
                Part I Writing
              </H2>
            </CardItem>
            {
              stateTemp.paperData&&this.state.partSelected === 'Writing'?(
                <Writing
                  value={stateTemp.paperData.writing}
                  onSubmit={(text)=>{this.setState({paperData: {...stateTemp.paperData, writing: text}})}}
                />

              ):null
            }
            <CardItem>
              <H2 onPress={this._partSelect(stateTemp,'Listening')}>
                Part II Listening Comprehension
              </H2>
            </CardItem>
            {
              stateTemp.paperData&&stateTemp.partSelected === 'Listening'&&(
                stateTemp.paperData.listening
              )?(
                <Listening
                  sections={stateTemp.paperData.listening.sections}
                  onSubmit={(sectionIndex, modulesIndex, questionIndex, optionSelected)=>{
                    // stateTemp.paperData.listening = listeningAnswers
                    // console.log(JSON.stringify({
                    //   sectionIndex: sectionIndex,
                    //   modulesIndex: modulesIndex,
                    //   questionIndex: questionIndex,
                    //   optionSelected: optionSelected
                    // }))

                    stateTemp.paperData.listening = (
                      stateTemp.paperData.listening?(
                        stateTemp.paperData.listening
                      ):{}
                    )

                    let listening = stateTemp.paperData.listening

                    listening.sections =(
                      listening.sections?(
                        listening.sections
                      ):[]
                    )

                    let sections = listening.sections

                    sections[sectionIndex] = (
                      sections[sectionIndex]?(
                        sections[sectionIndex]
                      ):{}
                    )

                    let sectionValue = sections[sectionIndex]

                    sectionValue.modules = (
                      sectionValue.modules?(
                        sectionValue.modules
                      ):[]
                    )

                    let modules = sectionValue.modules

                    modules[modulesIndex]=(
                      modules[modulesIndex]?(
                        modules[modulesIndex]
                      ):{}
                    )

                    let moduleValue = modules[modulesIndex]

                    moduleValue.questions=(
                      moduleValue.questions?(
                        moduleValue.questions
                      ):[]
                    )

                    let questions = moduleValue.questions

                    questions[questionIndex]=(
                      questions[questionIndex]?(
                        questions[questionIndex]
                      ):{}
                    )

                    let questionValue = questions[questionIndex]

                    questionValue.optionSelected = optionSelected

                    // console.log(JSON.stringify(stateTemp.paperData.listening))
                    this.setState(stateTemp)
                  }}
                />
              ):null
            }
            <CardItem>
              <H2 onPress={this._partSelect(stateTemp, 'Reading')}>
                Part III Reading comprehension
              </H2>
            </CardItem>
            {
              stateTemp.paperData&&stateTemp.partSelected === 'Reading'?(
                <Reading
                  // onSubmit={(text)=>{this.setState({paperData: {...stateTemp.paperData, writing: text}})}}
                />
              ):null
            }
            <CardItem button onPress={this._partSelect(stateTemp,'Translation')}>
              <H2>
                Part IV Translation
              </H2>
            </CardItem>
            {
              stateTemp.paperData&&stateTemp.partSelected === 'Translation'?(
                <Translation
                  value={stateTemp.paperData.translation}
                  onSubmit={(text)=>{
                    stateTemp.paperData.translation = text
                    this.setState(stateTemp)
                  }}
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
              stateTemp.paperData&&stateTemp.paperData.writing&&(
                stateTemp.paperData.writing.replace(/(^\s*)|(\s*$)/g, "").length !==0
              )?(
                <CardItem>
                  <Text>
                    {stateTemp.paperData.writing}
                  </Text>
                </CardItem>
              ):null
            }
            <CardItem>
              <H2>
                Part II Listening Comprehension
              </H2>
            </CardItem>
            {
              stateTemp.paperData&&stateTemp.paperData.listening&&(
                stateTemp.paperData.listening.sections&&(
                  stateTemp.paperData.listening.sections.filter((sectionValue)=>(
                    sectionValue&&sectionValue.modules&&(
                      sectionValue.modules.filter((moduleValue)=>(
                        moduleValue&&moduleValue.questions&&(
                          moduleValue.questions.filter((questionValue)=>(
                            questionValue&&questionValue.optionSelected!==null
                          )).length
                        )
                      )).length
                    )
                  )).length
                )
              )?(
                <CardItem>
                  <Text>
                    {JSON.stringify(stateTemp.paperData.listening)}
                  </Text>
                </CardItem>
              ):null
            }
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
              stateTemp.paperData&&stateTemp.paperData.translation&&(
                stateTemp.paperData.translation.replace(/(^\s*)|(\s*$)/g, "").length !==0
              )?(
                <CardItem>
                  <Text>
                    {this.state.paperData.translation}
                  </Text>
                </CardItem>
              ):null
            }
          </Card>
        </Content>
      </Container>
    )
  }
}
