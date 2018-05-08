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
  partSelect,
}) => (
  <View>
    <WritingBar partSelect={partSelect} />

    <CardItem header>
      <Text>
        Title:
      </Text>
    </CardItem>


    <WritingBar partSelect={partSelect} />
  </View>
)


const Writing = ({
  // title,
  // level,
  // date,
  partSelect,
  partSelected
}) => (
  <View>
  {
    partSelected === WRITING
      ? (
        <WritingContent
          partSelect={partSelect}
          // title={title}
          // date={date}
          // level={level}
        />)
      :(<WritingBar partSelect={partSelect} />)
  }
  </View>
)

export default Writing