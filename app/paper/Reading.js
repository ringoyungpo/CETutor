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
  READING
} from '../../constant/paperConst'


const Reading = ({
  // title,
  // level,
  // date,
  reading,
  onInputChange,
  partSelect,
  partSelected
}) => {
  const {
    sections
  } = reading

  return (
    <View>
  {
    partSelected === READING
      ? (
        <ReadingContent
          sections={sections}
          onInputChange={onInputChange}
          partSelect={partSelect}
          // title={title}
          // date={date}
          // level={level}
        />)
      :(<ReadingBar partSelect={partSelect} />)
  }
  </View>
  )
}

const ReadingBar = ({
  partSelect
}) => (
  <CardItem button onPress={()=>partSelect(READING)}>
    <H2>
      Part III Reading
    </H2>
  </CardItem>
)


const ReadingContent = ({
  // title,
  // level,
  // date,s
  onInputChange,
  sections,
  partSelect,
}) => (
  <View>
    <ReadingBar partSelect={partSelect} />
    <Icon type="Entypo" active name="chevron-thin-down" />


    <CardItem header>
      <Text>
        Directions:
      </Text>
    </CardItem>

    <CardItem>
      <Text>
        {JSON.stringify(sections)}
      </Text>
    </CardItem>


    <Icon type="Entypo" active name="chevron-thin-up" />
    <ReadingBar partSelect={partSelect} />
  </View>
)

export default Reading