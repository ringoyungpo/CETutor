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
  answers: {
    writing: ?string,
    listening: ?{
      sections: Array<?{
        modules: Array<?{
          questions: Array<?{
            optionSelected: ?number
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
      answers: {
        writing: null,
        listening: null,
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
              this.state.partSelected === 'Writing'?(
                <Writing
                  value={stateTemp.answers.writing}
                  onSubmit={(text)=>{this.setState({answers: {...stateTemp.answers, writing: text}})}}
                />

              ):null
            }
            <CardItem>
              <H2 onPress={this._partSelect(stateTemp,'Listening')}>
                Part II Listening Comprehension
              </H2>
            </CardItem>
            {
              stateTemp.partSelected === 'Listening'?(
                <Listening
                  onSubmit={(sectionIndex, modulesIndex, questionIndex, optionSelected)=>{
                    // stateTemp.answers.listening = listeningAnswers
                    // console.log(JSON.stringify({
                    //   sectionIndex: sectionIndex,
                    //   modulesIndex: modulesIndex,
                    //   questionIndex: questionIndex,
                    //   optionSelected: optionSelected
                    // }))

                    stateTemp.answers.listening = (
                      stateTemp.answers.listening?(
                        stateTemp.answers.listening
                      ):{}
                    )

                    let listening = stateTemp.answers.listening

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

                    console.log(JSON.stringify(stateTemp.answers.listening))
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
              stateTemp.partSelected === 'Reading'?(
                <Reading
                  // onSubmit={(text)=>{this.setState({answers: {...stateTemp.answers, writing: text}})}}
                />
              ):null
            }
            <CardItem button onPress={this._partSelect(stateTemp,'Translation')}>
              <H2>
                Part IV Translation
              </H2>
            </CardItem>
            {
              stateTemp.partSelected === 'Translation'?(
                <Translation
                  value={stateTemp.answers.translation}
                  onSubmit={(text)=>{
                    stateTemp.answers.translation = text
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
              stateTemp.answers.writing&&(
                stateTemp.answers.writing.replace(/(^\s*)|(\s*$)/g, "").length !==0
              )?(
                <CardItem>
                  <Text>
                    {stateTemp.answers.writing}
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
              stateTemp.answers&&stateTemp.answers.listening&&(
                stateTemp.answers.listening.sections&&(
                  stateTemp.answers.listening.sections.filter((sectionValue)=>(
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
                    {JSON.stringify(stateTemp.answers.listening)}
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
              stateTemp.answers.translation&&(
                stateTemp.answers.translation.replace(/(^\s*)|(\s*$)/g, "").length !==0
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
}
