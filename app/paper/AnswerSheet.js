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

const ListeningSheet = () => {
  return (
    <View>
      <CardItem>
        <H2>
          Part II Listening Comprehension
        </H2>
      </CardItem>
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