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
  PAPER_HEADER
} from '../../constant/paperConst'

const PaperHeaderBar = ({
  partSelect
}) => (
  <CardItem button onPress={()=>partSelect(PAPER_HEADER)}>
    <H1>
      Paper
    </H1>
  </CardItem>
)

const PaperHeaderContent = ({
  title,
  level,
  date,
  partSelect,
}) => (
  <View>
    <PaperHeaderBar partSelect={partSelect} />

    <CardItem header>
      <Text>
        Title:
      </Text>
    </CardItem>

    <CardItem>
      <Text>
        {title}
      </Text>
    </CardItem>

    <CardItem header>
      <Text>
        Level:
      </Text>
    </CardItem>

    <CardItem>
      <Text>
        {String(level).replace('_', ' ')}
      </Text>
    </CardItem>

    <CardItem header>
      <Text>
        Date:
      </Text>
    </CardItem>

    <CardItem>
      <Moment element={Text} format={'LLL'}>{date}</Moment>
    </CardItem>


    <PaperHeaderBar partSelect={partSelect} />
  </View>
)


const PaperHeader = ({
  title,
  level,
  date,
  partSelect,
  partSelected
}) => (
  <View>
  {
    partSelected !== PAPER_HEADER
      ? (<PaperHeaderBar partSelect={partSelect} />)
      : (
        <PaperHeaderContent
          partSelect={partSelect}
          title={title}
          date={date}
          level={level} />)
  }
  </View>
)

export default PaperHeader