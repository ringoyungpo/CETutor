import React from 'react'
import Moment from 'react-moment'
import {
  Text,
  Card,
  CardItem,
  H1,
  H2,
  View,
  Icon,
  Textarea,
} from 'native-base'
import {
  TRANSLATION
} from '../../constant/paperConst'

const Translation = ({
  // title,
  // level,
  // date,
  translation,
  onInputChange,
  partSelect,
  partSelected
}) => {
  const {
    question,
    answer
  } = translation
  return (
    <View>
  {
    partSelected === TRANSLATION
      ? (
        <TranslationContent
          partSelect={partSelect}
          answer={answer}
          onInputChange={onInputChange}
          // title={title}
          // date={date}
          // level={level}
          question={question}
        />)
      :(<TranslationBar partSelect={partSelect} />)
  }
  </View>
  )
}

const TranslationBar = ({
  partSelect
}) => (
  <CardItem button onPress={()=>partSelect(TRANSLATION)}>
    <H2>
      Part IV Translation
    </H2>
  </CardItem>
)

const TranslationContent = ({
  // title,
  // level,
  // date,s
  onInputChange,
  answer,
  question,
  partSelect,
}) => (
  <View>
    <TranslationBar partSelect={partSelect} />
    <Icon type="Entypo" active name="chevron-thin-down" />


    <CardItem header>
      <Text>
        Directions:
      </Text>
    </CardItem>

    <CardItem>
      <Text>
        For this part, you are allowed 30 minted to translate a passage from Chinese into English. You should write your answer on Answer Sheet.
      </Text>
    </CardItem>

    <CardItem>
      <Text>
        {question}
      </Text>
    </CardItem>

    <Textarea
      rowSpan={5}
      value={answer}
      placeholder="Write your answer here..."
      onChangeText={(value) => onInputChange('translation.answer',value)}
    />

    <Icon type="Entypo" active name="chevron-thin-up" />

    <TranslationBar partSelect={partSelect} />
  </View>
)

export default Translation