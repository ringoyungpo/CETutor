import React from 'react'
import Moment from 'react-moment'
import {
  Text,
  Card,
  CardItem,
  H1,
  H2,
  Picker,
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
    answer,
    level
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
          level={level}
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
  level,
  // date,s
  onInputChange,
  answer,
  question,
  partSelect,
}) => {
  return (
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

      <Picker
        mode="dropdown"
        selectedValue={level}
        // style={{
        //   color: mode===TEST?('black'):(optionSelected===rightAnswer?('green'):('red'))
        // }}
        onValueChange={(value)=>onInputChange(`translation.level`,value) }
      >
        <Picker.Item label={'请给该译文评个等级！'} value={0} />
        <Picker.Item label={'译文准确表达了原文的意思。译文流畅，结构清晰，用词贴切，基本无语言错误，仅有个别小错。'} value={14} />
        <Picker.Item label={'译文基本表达了原文的意思。结构较清晰，语言通顺，但有少量语言错误。'} value={11} />
        <Picker.Item label={'译文勉强表达了原文的意思。译文勉强连贯，语言错误相当多，其中有一些是严重错误。'} value={8} />
        <Picker.Item label={'译文仅表达了小部分原文的意思。译文连贯性差，有相当多的严重语言错误。'} value={5} />
        <Picker.Item label={'除了个别词语或句子，译文基本没有表达原文的意思。'} value={2} />
      </Picker>

      <Icon type="Entypo" active name="chevron-thin-up" />

      <TranslationBar partSelect={partSelect} />
    </View>
  )
}

export default Translation