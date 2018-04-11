/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'

import {
  Text,
  Card,
  CardItem,
  H3,
  Textarea,
} from 'native-base'

type Props = {
}
type State = {
  directions: string,
  sections: any,
  sectionSelected: ?string
}

export default class App extends Component<Props, State> {
  constructor(props: any){
    super(props)
    this.state={
      directions: 'Forf this part,you are allowed 30 minutes to write a short essay on e-learning.Try to imagine what will happen when more and more people study online instead of attending school. You are required to write at least 150 words but no more than 200 words.',
      sections:{
        a: {
          directions: 'Forf this part,you are allowed 30 minutes to write a short essay on e-learning.Try to imagine what will happen when more and more people study online instead of attending school. You are required to write at least 150 words but no more than 200 words.',
          questions: [
            {
              question: 'What is the news report mainly about?',
              a: 'The news report mainly about A?',
              b: 'The news report mainly about B?',
              c: 'The news report mainly about C?',
              d: 'The news report mainly about D?',
            },
            {
              question: 'What is the news report mainly about?',
              a: 'The news report mainly about A?',
              b: 'The news report mainly about B?',
              c: 'The news report mainly about C?',
              d: 'The news report mainly about D?',
            }
          ]
        },
        b: {
          directions: 'Forf this part,you are allowed 30 minutes to write a short essay on e-learning.Try to imagine what will happen when more and more people study online instead of attending school. You are required to write at least 150 words but no more than 200 words.',
          questions: [
            {
              question: 'What is the news report mainly about?',
              a: 'The news report mainly about A?',
              b: 'The news report mainly about B?',
              c: 'The news report mainly about C?',
              d: 'The news report mainly about D?',
            },
            {
              question: 'What is the news report mainly about?',
              a: 'The news report mainly about A?',
              b: 'The news report mainly about B?',
              c: 'The news report mainly about C?',
              d: 'The news report mainly about D?',
            }
          ]
        },
        c: {
          directions: 'Forf this part,you are allowed 30 minutes to write a short essay on e-learning.Try to imagine what will happen when more and more people study online instead of attending school. You are required to write at least 150 words but no more than 200 words.',
          questions: [
            {
              question: 'What is the news report mainly about?',
              a: 'The news report mainly about A?',
              b: 'The news report mainly about B?',
              c: 'The news report mainly about C?',
              d: 'The news report mainly about D?',
            },
            {
              question: 'What is the news report mainly about?',
              a: 'The news report mainly about A?',
              b: 'The news report mainly about B?',
              c: 'The news report mainly about C?',
              d: 'The news report mainly about D?',
            }
          ]
        }
      },
      sectionSelected: null
    }
  }

  render() {
    return (
      <Card>
        {
          Object.keys(this.state.sections).map((key,index)=>(
            <Card key={index}>
              <CardItem button onPress={()=>{this.setState({sectionSelected: this.state.sectionSelected == key ? null : key})}}>
                <H3>
                    Section {key.toUpperCase()}
                </H3>
              </CardItem>
              {
                this.state.sectionSelected === key?(
                  <Card>
                    <CardItem header>
                      <Text>
                        Directions:
                      </Text>
                    </CardItem>
                    <CardItem>
                      <Text>
                        {this.state.sections[key].directions}
                      </Text>
                    </CardItem>
                    {
                      this.state.sections[key].questions.map((item,index)=>(
                        <Card key={index}>
                          <CardItem header>
                            <Text>{item.question}</Text>
                          </CardItem>
                          {
                            Object.keys(item)
                            .filter((key)=>key.length==1)
                            .map((key, index)=>(
                              <CardItem key={index}>
                                <Text>{key.toUpperCase()}: {item[key]}</Text>
                              </CardItem>
                            ))
                          }
                        </Card>
                      ))
                    }
                  </Card>
                ):null
              }
            </Card>
          ))
        }
      </Card>
    );
  }
}
