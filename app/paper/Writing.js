import React from 'react'
import Moment from 'react-moment'
import {
  Text,
  Card,
  CardItem,
  H1,
  H2,
  View,
  Textarea,
} from 'native-base'
import {
  WRITING
} from '../../constant/paperConst'

const WritingBar = ({
  partSelect
}) => (
  <CardItem button onPress={()=>partSelect(WRITING)}>
    <H1>
      Part I Writing
    </H1>
  </CardItem>
)

const WritingContent = ({
  // title,
  // level,
  // date,s
  onInputChange,
  essay,
  directions,
  partSelect,
}) => (
  <View>
    <WritingBar partSelect={partSelect} />

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
      onChangeText={(value) => onInputChange('writingSheet.essay',value)}
    />


    <WritingBar partSelect={partSelect} />
  </View>
)


const Writing = ({
  // title,
  // level,
  // date,
  writing,
  writingSheet,
  onInputChange,
  partSelect,
  partSelected
}) => {
  const {
    directions
  } = writing

  const {
    essay
  } = writingSheet || {}
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
          // level={level}
          directions={directions}
        />)
      :(<WritingBar partSelect={partSelect} />)
  }
  </View>
  )
}

export default Writing