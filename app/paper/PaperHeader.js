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
  PAPER_HEADER
} from '../../constant/paperConst'
import _ from 'lodash'

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
  mode
}) => (
  <View>
    <PaperHeaderBar partSelect={partSelect} />
    <Icon type="Entypo" active name="chevron-thin-down" />

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

    <CardItem header>
      <Text>
        Mode:
      </Text>
    </CardItem>

    <CardItem>
      <Text>
        {_.startCase(mode.toLowerCase())}
      </Text>
    </CardItem>

    <Icon type="Entypo" active name="chevron-thin-up" />
    <PaperHeaderBar partSelect={partSelect} />
  </View>
)


const PaperHeader = ({
  title,
  level,
  date,
  partSelect,
  partSelected,
  mode
}) => (
  <View>
  {
    partSelected === PAPER_HEADER
      ? (
        <PaperHeaderContent
          partSelect={partSelect}
          title={title}
          date={date}
          mode={mode}
          level={level} />)
      : (<PaperHeaderBar partSelect={partSelect} />)

  }
  </View>
)

export default PaperHeader