import React, {
  Component
} from 'react'

import {
  H1,
  H2,
  H3,
  Container,
  Header,
  Content,
  Text,
  Form,
  Item,
  Input,
  Button,
  Body,
  Card,
  CardItem,
  Label,
  View,
} from 'native-base';

const AnswerSheet = ({
  writing,
  reading,
  listening,
  translation,
}) => {
  return (
    <View>
      <Card>
        <CardItem>
          <H1>
            Answer Sheet
          </H1>
        </CardItem>

        <WritingSheet writing={writing}/>
        <ListeningSheet listening={listening}/>
        <ReadingSheet reading={reading}/>
        <TranslationSheet translation={translation}/>
      </Card>
    </View>
  )
}

const WritingSheet = ({
  writing
}) => {
  const {
    essay
  } = writing
  return (
    <View>
      <CardItem>
        <H2>
          Part I Writing
        </H2>
      </CardItem>
      {
        essay&&(
          essay.replace(/(^\s*)|(\s*$)/g, "").length !==0
        )?(
          <CardItem>
            <Text>
              {essay}
            </Text>
          </CardItem>
        ):null
      }
    </View>
  )
}

const ListeningSheet = ({
  listening
}) => {
  const {
    sections
  } = listening
  return (
    <View>
      <CardItem>
        <H2>
          Part II Listening Comprehension
        </H2>
      </CardItem>
      {
        sections.filter((sectionValue)=>{
          const {modules}=sectionValue
          return(
            modules.filter((moduleValue)=>{
              const {questions}=moduleValue
              return(
                questions.filter((questionValue)=>{
                  const {optionSelected}=questionValue
                  return(
                    optionSelected!==null&&optionSelected!==undefined
                  )
                }).length
              )
            }).length)
        }).length?(
          <View>
            {
              sections.map((sectionValue, sectionIndex)=>{
                const {modules,sectionTitle}=sectionValue
                return(
                  modules.filter((moduleValue)=>{
                    const {questions}=moduleValue
                    return(
                      questions.filter((questionValue)=>{
                        const {optionSelected} = questionValue
                        return(
                          optionSelected!==null&&optionSelected!==undefined
                        )
                      }).length
                    )
                  }).length?(
                    <View key={sectionIndex}>
                      <CardItem>
                        <H3>
                          Section {String.fromCharCode(sectionIndex+65)} {sectionTitle}
                        </H3>
                      </CardItem>
                        {
                          modules.map((moduleValue, moduleIndex)=>{
                            const {questions}=moduleValue
                            return(
                            <View key={moduleIndex}>
                              <CardItem header>
                                <Text>{sectionTitle} {moduleIndex + 1}</Text>
                              </CardItem>
                              <CardItem>
                                <Text>
                                  {
                                    questions.map((questionValue, questionIndex)=>{
                                      const {optionSelected}=questionValue
                                      return(
                                        `${questionIndex + 1}. ${optionSelected===null?'  ':String.fromCharCode(optionSelected + 65)}  `
                                      )}).reduce((accumulator, currentValue)=>(
                                        accumulator + currentValue
                                      ))
                                    }
                                  </Text>
                                </CardItem>
                              </View>
                            )})
                        }
                    </View>
                  ):null
                )
              })
            }
          </View>
        ):null}
    </View>
  )
}

const ReadingSheet = () => {
  return (
    <View>
      <CardItem>
        <H2>
          Part III Reading Comprehension
        </H2>
      </CardItem>
    </View>
  )
}

const TranslationSheet = ({
  translation
}) => {
  const {
    answer
  } = translation
  return (
    <View>
      <CardItem>
        <H2>
          Part IV Translation
        </H2>
      </CardItem>
      {
        answer&&(
          answer.replace(/(^\s*)|(\s*$)/g, "").length !==0
        )?(
          <CardItem>
            <Text>
              {answer}
            </Text>
          </CardItem>
        ):null
      }
    </View>
  )
}

export default AnswerSheet