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
  Icon,
  Item,
  Button,
} from 'native-base'

import util from 'util'
import Sound from 'react-native-sound'

type Props = {
  onSubmit: Function,
  scrollToTop: Function,
  sections: ?Array<{
    sectionTitle: string,
    directions: string,
    modules: Array<{
      moduleTitle: string,
      moduleSound: {
        url: string,
        status: number,
      },
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
      moduleSound: {
        url: string,
        status: number,
      },
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
    Sound.setCategory('Playback')
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

                // console.log(util.inspect(even.nativeEvent.locationX))
                this.setState(stateTemp, ()=>{this.props.scrollToTop()})
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
                            <Right>
                              <Button transparent dark onPress={()=>{
                                const callback = (error, sound) => {
                                  if (error) {
                                    alert(error.message);
                                    // setTestState(testInfo, component, 'fail');
                                    return;
                                  }
                                  // setTestState(testInfo, component, 'playing');
                                  // Run optional pre-play callback
                                  // testInfo.onPrepared && testInfo.onPrepared(sound, component);
                                  sound.play(() => {
                                    // Success counts as getting to the end
                                    // setTestState(testInfo, component, 'win');
                                    // Release when it's done so we're not using up resources
                                    sound.release();
                                  });
                                }


                                const sound = new Sound(
                                  moduleValue.moduleSound.url,
                                  null,error=>callback(error, sound)
                                )

                                // sound.play(
                                //   (success) => {
                                //     if (success) {
                                //       console.log('successfully finished playing');
                                //     } else {
                                //       console.log('playback failed due to audio decoding errors');
                                //       // reset the player to its uninitialized state (android only)
                                //       // this is the only option to recover after an error occured and use the player again
                                //       sound.release();
                                //     }
                                //   }
                                // )
                              }}>
                                <Icon
                                  name='ios-headset-outline'
                                />
                              </Button>
                            </Right>
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
                                      {
                                        optionIndex===questionValue.optionSelected?(
                                          <Right>
                                            <Icon
                                              name='radio-button-on'
                                              style={{color:'#000'}}
                                            />
                                          </Right>
                                        ):null
                                      }
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
