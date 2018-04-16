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
  onSubmit: Function,
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
}

type State = {
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
  }>,
  sectionSelected: ?number
}


export default class App extends Component<Props, State> {
  constructor(props: Props){
    super(props)
    this.state={
      sections: this.props.sections,
      sectionSelected: null,
    }
  }

  render() {
    const stateTemp = this.state
    let optionSelected
    return stateTemp.sections?(
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
                      sectionValue.modules.map((moduleValue,moduleIndex)=>(
                        <View key={moduleIndex}>
                          <CardItem header>
                            <Text>{sectionValue.sectionTitle} {moduleIndex + 1}</Text>
                          </CardItem>
                          <CardItem header>
                            <Text>{moduleValue.moduleTitle}</Text>
                          </CardItem>
                          {
                            moduleValue.questions.map((questionValue, questionIndex)=>(
                              <View key={questionIndex}>
                                <CardItem header>
                                  <Text>
                                    {questionIndex + 1}.
                                  </Text>
                                </CardItem>
                                {
                                  questionValue.options.map((optionValue, optionIndex)=>(
                                    <CardItem key={optionIndex} button onPress={()=>{
                                      optionSelected = questionValue.optionSelected!==optionIndex?(
                                        optionIndex
                                      ):(
                                        null
                                      )

                                      questionValue.optionSelected = optionSelected
                                      // console.log(JSON.stringify({
                                      //   sectionIndex: sectionIndex,
                                      //   moduleIndex: moduleIndex,
                                      //   questionIndex: questionIndex,
                                      //   optionIndex: optionIndex,
                                      // }))
                                      // console.log(JSON.stringify(
                                      //   stateTemp.sections[sectionIndex].modules[moduleIndex].questions[questionIndex].optionSelected
                                      // ))
                                      this.props.onSubmit(sectionIndex, moduleIndex, questionIndex, optionSelected)

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
    ):null
  }
}
