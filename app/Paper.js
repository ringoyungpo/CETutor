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
    writing: {
      directions: string,
      essay : ?string
    },
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
        writing: {
          directions:'Forf this part,you are allowed 30 minutes to write a short essay on e-learning.Try to imagine what will happen when more and more people study online instead of attending school. You are required to write at least 150 words but no more than 200 words.',
          essay: null
        },
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
                          writing={paperDataTemp.writing}
                          onSubmit={(words)=>{
                            paperDataTemp.writing.essay = words
                            this.setState({paperData: paperDataTemp})
                          }}
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
                          onSubmit={(sectionIndex, moduleIndex, questionIndex, optionSelected)=>{
                            paperDataTemp.listening.sections[
                              sectionIndex
                            ].modules[moduleIndex].questions[
                              questionIndex
                            ].optionSelected = optionSelected

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
                      paperDataTemp.writing.essay&&(
                        paperDataTemp.writing.essay.replace(/(^\s*)|(\s*$)/g, "").length !==0
                      )?(
                        <CardItem>
                          <Text>
                            {paperDataTemp.writing.essay}
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
                      paperDataTemp.listening.sections.filter((sectionValue)=>(
                        sectionValue.modules.filter((moduleValue)=>(
                          moduleValue.questions.filter((questionValue)=>(
                            questionValue&&questionValue.optionSelected!==null
                          )).length
                        )).length
                      )).length?(
                        // <CardItem>
                        //   <Text>
                        //     {JSON.stringify(paperDataTemp.listening)}
                        //   </Text>
                        // </CardItem>
                        <View>
                          {
                            paperDataTemp.listening.sections.map((sectionValue, sectionIndex)=>(
                              sectionValue.modules.filter((moduleValue)=>(
                                moduleValue.questions.filter((questionValue)=>(
                                  questionValue&&questionValue.optionSelected!==null
                                )).length
                              )).length?(
                                <View key={sectionIndex}>
                                  <CardItem>
                                    <H3>
                                      Section {String.fromCharCode(sectionIndex+65)} {sectionValue.sectionTitle}
                                    </H3>
                                  </CardItem>
                                  {
                                    sectionValue.modules.map((moduleValue, moduleIndex)=>(
                                      <View key={moduleIndex}>
                                        <CardItem header>
                                          <Text>{sectionValue.sectionTitle} {moduleIndex + 1}</Text>
                                        </CardItem>
                                        <CardItem>
                                          <Text>
                                            {
                                              moduleValue.questions.map((questionValue, questionIndex)=>(
                                                `${questionIndex + 1}. ${questionValue.optionSelected===null?'  ':String.fromCharCode(questionValue.optionSelected + 65)}  `
                                              )).reduce((accumulator, currentValue)=>(
                                                accumulator + currentValue
                                              ))
                                            }
                                          </Text>
                                        </CardItem>
                                      </View>
                                    ))
                                  }
                                </View>
                              ):null
                            ))
                          }
                        </View>
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
