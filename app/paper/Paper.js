/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react'
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
import {
  TabNavigator
} from 'react-navigation'
import Writing from './Writing'
import Listening from './Listening'
import Reading from './Reading'
import Translation from './Translation'
import PaperStore from './PaperStore'
import {
  isEmpty
} from 'lodash';

type Props = {
  navigation: Function
}
type State = {
  partSelected: ? string,
  paperData: ? {
    writing: {
      directions: string,
      essay: ? string
    },
    listening: {
      sections: Array < {
        sectionTitle: string,
        directions: string,
        modules: Array < {
          moduleTitle: string,
          moduleSound: {
            url: string,
            status: number,
          },
          questions: Array < {
            optionSelected: ? number,
            options: Array < string >
          } > ,
        } >
      } >
    },
    translation: {
      directions: string,
      passage: string,
      answer: ? string,
    }
  }
}
import {
  observer
} from 'mobx-react'

@observer
class Paper extends Component < Props, State > {
  scroll: any

  constructor(props: any) {
    super(props)
    PaperStore.InitAsync(this.props.navigation.getParam('_id'))
    this.state = {
      partSelected: null,
      paperData: {
        writing: {
          directions: 'Forf this part,you are allowed 30 minutes to write a short essay on e-learning.Try to imagine what will happen when more and more people study online instead of attending school. You are required to write at least 150 words but no more than 200 words.',
          essay: null
        },
        listening: {
          sections: [{
              directions: '1Forf this part,you are allowed 30 minutes to write a short essay on e-learning.Try to imagine what will happen when more and more people study online instead of attending school. You are required to write at least 150 words but no more than 200 words.',
              sectionTitle: 'News Report',
              modules: [{
                moduleTitle: '1Questions are based on what you have heard?',
                moduleSound: {
                  url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
                  status: 2,
                },
                questions: [{
                  optionSelected: null,
                  options: [
                    '1The news report mainly about A?',
                    '1The news report mainly about B?',
                    '1The news report mainly about C?',
                    '1The news report mainly about D?',
                  ]
                }, {
                  optionSelected: null,
                  options: [
                    '1The news report mainly about A?',
                    '1The news report mainly about B?',
                    '1The news report mainly about C?',
                    '1The news report mainly about D?',
                  ]
                }, {
                  optionSelected: null,
                  options: [
                    '1The news report mainly about A?',
                    '1The news report mainly about B?',
                    '1The news report mainly about C?',
                    '1The news report mainly about D?',
                  ]
                }, {
                  optionSelected: null,
                  options: [
                    '1The news report mainly about A?',
                    '1The news report mainly about B?',
                    '1The news report mainly about C?',
                    '1The news report mainly about D?',
                  ]
                }, ]
              }, ]
            },
            {
              directions: '2Forf this part,you are allowed 30 minutes to write a short essay on e-learning.Try to imagine what will happen when more and more people study online instead of attending school. You are required to write at least 150 words but no more than 200 words.',
              sectionTitle: 'Conversation',
              modules: [{
                  moduleTitle: '2Questions are based on what you have heard?',
                  moduleSound: {
                    url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
                    status: 2,
                  },
                  questions: [{
                    optionSelected: null,
                    options: [
                      '2The news report mainly about A?',
                      '2The news report mainly about B?',
                      '2The news report mainly about C?',
                      '2The news report mainly about D?',
                    ]
                  }, {
                    optionSelected: null,
                    options: [
                      '2The news report mainly about A?',
                      '2The news report mainly about B?',
                      '2The news report mainly about C?',
                      '2The news report mainly about D?',
                    ]
                  }, {
                    optionSelected: null,
                    options: [
                      '2The news report mainly about A?',
                      '2The news report mainly about B?',
                      '2The news report mainly about C?',
                      '2The news report mainly about D?',
                    ]
                  }, ]
                },
                {
                  moduleTitle: '2Questions are based on what you have heard?',
                  moduleSound: {
                    url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
                    status: 2,
                  },
                  questions: [{
                    optionSelected: null,
                    options: [
                      '2The news report mainly about A?',
                      '2The news report mainly about B?',
                      '2The news report mainly about C?',
                      '2The news report mainly about D?',
                    ]
                  }, {
                    optionSelected: null,
                    options: [
                      '2The news report mainly about A?',
                      '2The news report mainly about B?',
                      '2The news report mainly about C?',
                      '2The news report mainly about D?',
                    ]
                  }, {
                    optionSelected: null,
                    options: [
                      '2The news report mainly about A?',
                      '2The news report mainly about B?',
                      '2The news report mainly about C?',
                      '2The news report mainly about D?',
                    ]
                  }, ]
                }
              ]
            },
            {
              directions: '3Forf this part,you are allowed 30 minutes to write a short essay on e-learning.Try to imagine what will happen when more and more people study online instead of attending school. You are required to write at least 150 words but no more than 200 words.',
              sectionTitle: 'Passange',
              modules: [{
                  moduleTitle: '3Questions are based on what you have heard?',
                  moduleSound: {
                    url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
                    status: 2,
                  },
                  questions: [{
                    optionSelected: null,
                    options: [
                      '3The news report mainly about A?',
                      '3The news report mainly about B?',
                      '3The news report mainly about C?',
                      '3The news report mainly about D?',
                    ]
                  }, {
                    optionSelected: null,
                    options: [
                      '3The news report mainly about A?',
                      '3The news report mainly about B?',
                      '3The news report mainly about C?',
                      '3The news report mainly about D?',
                    ]
                  }, ]
                },
                {
                  moduleTitle: '3Questions are based on what you have heard?',
                  moduleSound: {
                    url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
                    status: 2,
                  },
                  questions: [{
                    optionSelected: null,
                    options: [
                      '3The news report mainly about A?',
                      '3The news report mainly about B?',
                      '3The news report mainly about C?',
                      '3The news report mainly about D?',
                    ]
                  }, {
                    optionSelected: null,
                    options: [
                      '3The news report mainly about A?',
                      '3The news report mainly about B?',
                      '3The news report mainly about C?',
                      '3The news report mainly about D?',
                    ]
                  }, ]
                }, {
                  moduleTitle: '3Questions are based on what you have heard?',
                  moduleSound: {
                    url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
                    status: 2,
                  },
                  questions: [{
                    optionSelected: null,
                    options: [
                      '3The news report mainly about A?',
                      '3The news report mainly about B?',
                      '3The news report mainly about C?',
                      '3The news report mainly about D?',
                    ]
                  }, {
                    optionSelected: null,
                    options: [
                      '3The news report mainly about A?',
                      '3The news report mainly about B?',
                      '3The news report mainly about C?',
                      '3The news report mainly about D?',
                    ]
                  }, ]
                },
              ]
            },
            // {
            //   directions: '4Forf this part,you are allowed 30 minutes to write a short essay on e-learning.Try to imagine what will happen when more and more people study online instead of attending school. You are required to write at least 150 words but no more than 200 words.',
            //   sectionTitle: 'Record',
            //   modules: [
            //     {
            //       moduleTitle: '4Questions are based on what you have heard?',
            //       moduleSound:{
            // 				url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
            // 				status: 2,
            // 			},
            // 			questions: [
            //         {
            //           optionSelected: null,
            // 					options: [
            //             '4The news report mainly about A?',
            //             '4The news report mainly about B?',
            //             '4The news report mainly about C?',
            //             '4The news report mainly about D?',
            //           ]
            //         },
            //       ]
            //     },{
            //       moduleTitle: '4Questions are based on what you have heard?',
            //       moduleSound:{
            // 				url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
            // 				status: 2,
            // 			},
            // 			questions: [
            //         {
            //           optionSelected: null,
            // 					options: [
            //             '4The news report mainly about A?',
            //             '4The news report mainly about B?',
            //             '4The news report mainly about C?',
            //             '4The news report mainly about D?',
            //           ]
            //         },
            //       ]
            //     },{
            //       moduleTitle: '4Questions are based on what you have heard?',
            //       moduleSound:{
            // 				url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
            // 				status: 2,
            // 			},
            // 			questions: [
            //         {
            //           optionSelected: null,
            // 					options: [
            //             '4The news report mainly about A?',
            //             '4The news report mainly about B?',
            //             '4The news report mainly about C?',
            //             '4The news report mainly about D?',
            //           ]
            //         },
            //       ]
            //     },{
            //       moduleTitle: '4Questions are based on what you have heard?',
            //       moduleSound:{
            // 				url: 'https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3',
            // 				status: 2,
            // 			},
            // 			questions: [
            //         {
            //           optionSelected: null,
            // 					options: [
            //             '4The news report mainly about A?',
            //             '4The news report mainly about B?',
            //             '4The news report mainly about C?',
            //             '4The news report mainly about D?',
            //           ]
            //         },
            //       ]
            //     },
            //   ]
            // },
          ]
        },
        translation: {
          directions: 'For this part, you are allowed 30 minted to translate a passage from Chinese into English. You should write your answer on Answer Sheet 2.',
          passage: '乌镇是浙江的一座古老水镇，坐落在京杭大运河河畔。这是一处迷人的地方，有许多古桥、中式旅店和餐馆。在过去一千年里，乌镇的水系和生活方式并未经历多少变化，是一座展现古文明的博物馆。乌镇所有房屋都用石木建筑。数百年来，当地沿着河边建起了住宅和集市。无数宽敞美丽的庭院藏身于屋舍之间，游客们每到一处都会有惊喜的发现。',
          answer: null
        },
      }
    }
  }

  _partSelect = (part) => () => {
    this.setState({
      partSelected: this.state.partSelected === part ? null : part
    })
    // console.log(part);
  }

  render() {
    const paperDataTemp = this.state.paperData
    const {
      navigate,
      getParam
    } = this.props.navigation
    const {
      paper,
      downloading
    } = PaperStore
    return (
      <Container>
        {/* <Header/> */}
        <Content innerRef={ref => {this.scroll = ref}}>
          {downloading?(<Text>Downloading</Text>):(<Text>{JSON.stringify(paper)}</Text>)}

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
                          scrollToTop={()=>{this.scroll.props.scrollToPosition(0,0)}}
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
                        Part III Reading Comprehension
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
                          translation={paperDataTemp.translation}
                          onSubmit={(words)=>{
                            paperDataTemp.translation.answer = words
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
                      paperDataTemp.translation.answer&&(
                        paperDataTemp.translation.answer.replace(/(^\s*)|(\s*$)/g, "").length !==0
                      )?(
                        <CardItem>
                          <Text>
                            {paperDataTemp.translation.answer}
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

export default Paper