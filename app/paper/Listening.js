/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

type Props = {
  isSelected: boolean
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
      <View style={styles.container}>

        {
          this.props.isSelected?
            Object.keys(this.state.sections).map((key,index)=>(
              <View key={index} style={styles.container}>
                <TouchableHighlight
                  onPress={()=>{this.setState({sectionSelected: this.state.sectionSelected == key ? null : key})}}>
                  <View style={styles.container}>
                    <Text style={styles.section}>
                      Section {key.toUpperCase()}
                    </Text>
                  </View>
                </TouchableHighlight>
                {
                  this.state.sectionSelected == key?(
                    <View>
                      <Text>
                        {this.state.sections[key].directions}
                      </Text>
                      {
                        this.state.sections[key].questions.map((item,index)=>(
                          <View key={index}>
                            <Text>{item.question}</Text>
                            {
                              Object.keys(item)
                              .filter((key)=>key.length==1)
                              .map((key, index)=>(
                                <Text key={index}>{key.toUpperCase()}: {item[key]}</Text>
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
          : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  part: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  section: {
    textAlign: 'center',
    margin: 10,
  },
  directions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
