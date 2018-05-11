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

import {
  TEST
} from '../../constant/paperConst'

const AnswerSheet = ({
  writing,
  reading,
  listening,
  translation,
  mode,
  toggleAnswerSheet,
  showAnswerSheet
}) => {
  return (
    <View>
      <Card>
        <CardItem button onPress={toggleAnswerSheet}>
          <H1>
            Answer Sheet
          </H1>
        </CardItem>

        {
          showAnswerSheet&&(
            <View>
              <WritingSheet writing={writing}/>
              <ListeningSheet listening={listening} mode={mode} />
              <ReadingSheet reading={reading} mode={mode}/>
              <TranslationSheet translation={translation}/>
            </View>
          )
        }
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
  listening,
  mode
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
            <CardItem>
              <H3>
                {
                  // (accumulator, currentValue)=>(
                  //   <Text>
                  //     {accumulator}{', '}
                  //     {currentValue}
                  //   </Text>
                  // )
                  sections.map((sectionValue, sectionIndex)=>{
                    const {modules} = sectionValue
                    return(
                      modules.map((moduleValue, moduleIndex)=>{
                        const {questions}=moduleValue
                        return(
                          questions.map((questionValue)=>{
                            const {optionSelected,rightAnswer}=questionValue
                            return(
                              optionSelected===rightAnswer?1:0
                            )
                          }).reduce((questionAccumulator, currentQuestionValue)=>{
                            return(
                              currentQuestionValue+questionAccumulator
                            )
                          })
                        )
                      })
                      .reduce((moduleAccumulator,currentModuleValue)=>{
                        return(
                          currentModuleValue+moduleAccumulator
                        )
                      })
                    )
                  })
                  .reduce((sectionAccumulator,currentSectionValue)=>{
                    return(currentSectionValue+sectionAccumulator)
                  })
                }/{
                  sections.map((sectionValue, sectionIndex)=>{
                    const {modules} = sectionValue
                    return(
                      modules.map((moduleValue, moduleIndex)=>{
                        const {questions}=moduleValue
                        return(
                          questions.map((questionValue)=>{
                            const {optionSelected,rightAnswer}=questionValue
                            return(
                              1
                            )
                          }).reduce((questionAccumulator, currentQuestionValue)=>{
                            return(
                              currentQuestionValue+questionAccumulator
                            )
                          })
                        )
                      })
                      .reduce((moduleAccumulator,currentModuleValue)=>{
                        return(
                          currentModuleValue+moduleAccumulator
                        )
                      })
                    )
                  })
                  .reduce((sectionAccumulator,currentSectionValue)=>{
                    return(currentSectionValue+sectionAccumulator)
                  })
                }
              </H3>
            </CardItem>
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
                                      const {optionSelected,rightAnswer}=questionValue
                                      return(
                                        <Text>
                                          {questionIndex + 1}{'. '}
                                            {optionSelected===null?('  '):(
                                              <Text style={{color:mode===TEST?('black'):(optionSelected===rightAnswer?('green'):('red'))}}>
                                                {String.fromCharCode(optionSelected + 65)}
                                              </Text>
                                            )}
                                        </Text>
                                      )}).reduce((accumulator, currentValue)=>(
                                        <Text>
                                          {accumulator}{', '}
                                          {currentValue}
                                        </Text>
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

const ReadingSheet = ({
  reading,
  mode
}) => {
  const {
    sections
  } = reading
  const {
    bankedCloze,
    locating,
    selection
  } = sections
  const {
    orderSelected,
    options,
    rightOrder
  } = bankedCloze

  const {
    questions
  } = locating

  const {
    passages
  } = selection

  return (
    <View>
      <CardItem>
        <H2>
          Part III Reading Comprehension
        </H2>
      </CardItem>
      {
        orderSelected&&orderSelected.filter((orderSelectedItemValue)=>{
          return (
            orderSelectedItemValue !== null && orderSelectedItemValue !== undefined

          )
        }).length>0&&(
          <View>
            <CardItem header>
              <H3>
                Sections A Bankedcloze
              </H3>
            </CardItem>
            <CardItem>
              <Text>
                {orderSelected.map((orderSelectedItemValue,orderSelectedItemIndex)=>{
                  return(
                    <Text>
                      {orderSelectedItemIndex+1}. {((orderSelectedItemValue!==null)&&(orderSelectedItemValue!==undefined))?(
                        <Text style={{color:mode===TEST?('black'):(orderSelected[orderSelectedItemIndex]===rightOrder[orderSelectedItemIndex]?('green'):('red'))}}>
                          {options[orderSelectedItemValue]}
                        </Text>
                      ):(
                        '__'
                      )}
                    </Text>
                  )
                }).reduce((accumulator, currentValue)=>(
                  <Text>
                    {accumulator}{', '}
                    {currentValue}
                  </Text>
                ))}
              </Text>
            </CardItem>
          </View>
        )
      }
      {
        questions.filter((questionValue)=>{
          const {optionSelected} = questionValue
          return(
            Number.isInteger(optionSelected)
          )
        }).length>0&&(
          <View>
            <CardItem header>
              <H3>
                Sections B Locating
              </H3>
            </CardItem>
            <CardItem>
              <Text>
                {
                  questions.map((questionValue, questionIndex)=>{
                    const {optionSelected,rightAnswer} =  questionValue
                    return(
                      <Text>
                        {questionIndex + 1}{'. '}
                          {optionSelected===null?('  '):(
                            <Text style={{color:mode===TEST?('black'):(optionSelected===rightAnswer?('green'):('red'))}}>
                              {String.fromCharCode(optionSelected + 65)}
                            </Text>
                          )}
                      </Text>
                    )
                  }).reduce((accumulator, currentValue)=>(
                    <Text>
                      {accumulator}{', '}
                      {currentValue}
                    </Text>
                  ))
                }
              </Text>
            </CardItem>
          </View>
        )
      }
      {


        passages.filter((passageValue)=>{
          const {questions}=passageValue
          return(
            questions.filter((questionValue)=>{
              const {optionSelected}=questionValue
              return(
                optionSelected!==null&&optionSelected!==undefined
              )
            }).length>0
          )
        }).length>0&&(
          <View>
            <CardItem header>
              <H3>
                Sections C Selection
              </H3>
            </CardItem>
            {
              passages.map((passageValue, passageIndex)=>{
                const {questions}=passageValue
                return(
                <View key={passageIndex}>
                  <CardItem>
                    <Text>
                      {
                        questions.map((questionValue, questionIndex)=>{
                          const {optionSelected,rightAnswer}=questionValue
                          return(
                            <Text>
                              {questionIndex + 1}{'. '}
                                {optionSelected===null?('  '):(
                                  <Text style={{color:mode===TEST?('black'):(optionSelected===rightAnswer?('green'):('red'))}}>
                                    {String.fromCharCode(optionSelected + 65)}
                                  </Text>
                                )}
                            </Text>
                          )}).reduce((accumulator, currentValue)=>(
                            <Text>
                              {accumulator}{', '}
                              {currentValue}
                            </Text>
                          ))
                        }
                      </Text>
                    </CardItem>
                  </View>
                )})
            }
          </View>
        )
      }
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