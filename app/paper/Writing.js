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
  Picker
} from 'native-base'
import {
  WRITING
} from '../../constant/paperConst'

const WritingBar = ({
  partSelect
}) => (
  <CardItem button onPress={()=>partSelect(WRITING)}>
    <H2>
      Part I Writing
    </H2>
  </CardItem>
)

const WritingContent = ({
  // title,
  // level,
  // date,s
  onInputChange,
  essay,
  level,
  directions,
  partSelect,
}) => (
  <View>
    <WritingBar partSelect={partSelect} />
    <Icon type="Entypo" active name="chevron-thin-down" />


    <CardItem header>
      <Text>
        Directions:
      </Text>
    </CardItem>

    <CardItem>
      <Text>
        {directions}
      </Text>
    </CardItem>

    <Textarea
      rowSpan={5}
      value={essay}
      placeholder="Write your answer here..."
      onChangeText={(value) => onInputChange('writing.essay',value)}
    />

    <Picker
      mode="dropdown"
      selectedValue={level}
      // style={{
      //   color: mode===TEST?('black'):(optionSelected===rightAnswer?('green'):('red'))
      // }}
      onValueChange={(value)=>onInputChange(`writing.level`,value) }
    >
      <Picker.Item label={'请给该文章评个等级！'} value={undefined} />
      <Picker.Item label={'切题。表达思想清楚，文字通顺、连贯，基本上无语言错误，仅有个别小错。'} value={14} />
      <Picker.Item label={'切题。表达思想清楚，文字连贯，但有少量语言错误。'} value={11} />
      <Picker.Item label={'基本切题。 有些地方表达思想不够清楚，文字勉强连贯，语言错误相当多，其中有一些是严重错误。'} value={8} />
      <Picker.Item label={'基本切题。表达思想不清楚，连贯性差，有较多的严重语言错误。'} value={5} />
      <Picker.Item label={'条理不清，思路紊乱，语言支离破碎或大部分句子均有错误，且多数为严重错误.'} value={2} />
    </Picker>




    <Icon type="Entypo" active name="chevron-thin-up" />
    <WritingBar partSelect={partSelect} />
  </View>
)


const Writing = ({
  // title,
  // level,
  // date,
  writing,
  onInputChange,
  partSelect,
  partSelected
}) => {
  const {
    directions,
    essay,
    level
  } = writing

  return (
    <View>
  {
    partSelected === WRITING
      ? (
        <WritingContent
          partSelect={partSelect}
          essay={essay}
          onInputChange={onInputChange}
          // title={title}
          // date={date}
          level={level}
          directions={directions}
        />)
      :(<WritingBar partSelect={partSelect} />)
  }
  </View>
  )
}

export default Writing