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
  View,
} from 'native-base'
import {TabNavigator} from 'react-navigation'
import Writing from './paper/Writing'
import Listening from './paper/Listening'
import Reading from './paper/Reading'
import Translation from './paper/Translation'

type Props = {}
type State = {
  partSelected: ?string,
  paperData: ?{
    writing: ?string,
    listening: {
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

  _partSelect = (part) => () => {
    this.setState({partSelected: this.state.partSelected===part?null:part})
    // console.log(part);
  }

  render(){
    const paperDataTemp = this.state.paperData
    return (
      <Container>
        <Header/>
        <Content>
          {
            paperDataTemp?(
              <View>
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
                          value={paperDataTemp.writing}
                          onSubmit={(text)=>{this.setState({paperData: paperDataTemp})}}
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
                          sections={paperDataTemp.listening.sections}
                          onSubmit={(sectionIndex, modulesIndex, questionIndex, optionSelected)=>{
                            // paperDataTemp.listening = listeningAnswers
                            // console.log(JSON.stringify({
                            //   sectionIndex: sectionIndex,
                            //   modulesIndex: modulesIndex,
                            //   questionIndex: questionIndex,
                            //   optionSelected: optionSelected
                            // }))

                            paperDataTemp.listening = (
                              paperDataTemp.listening?(
                                paperDataTemp.listening
                              ):{}
                            )

                            let listening = paperDataTemp.listening

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

                            // console.log(JSON.stringify(paperDataTemp.listening))
                            this.setState({paperData: paperDataTemp})
                          }}
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
                          // onSubmit={(text)=>{this.setState({paperData: {...paperDataTemp, writing: text}})}}
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
                          value={paperDataTemp.translation}
                          onSubmit={(text)=>{
                            paperDataTemp.translation = text
                            this.setState({paperData:paperDataTemp})
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
                      paperDataTemp.writing&&(
                        paperDataTemp.writing.replace(/(^\s*)|(\s*$)/g, "").length !==0
                      )?(
                        <CardItem>
                          <Text>
                            {paperDataTemp.writing}
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
                      paperDataTemp.listening&&(
                        paperDataTemp.listening.sections&&(
                          paperDataTemp.listening.sections.filter((sectionValue)=>(
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
                            {JSON.stringify(paperDataTemp.listening)}
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
                      paperDataTemp.translation&&(
                        paperDataTemp.translation.replace(/(^\s*)|(\s*$)/g, "").length !==0
                      )?(
                        <CardItem>
                          <Text>
                            {paperDataTemp.translation}
                          </Text>
                        </CardItem>
                      ):null
                    }
                  </Card>
              </View>
            ):null
          }
        </Content>
      </Container>
    )
  }
}
