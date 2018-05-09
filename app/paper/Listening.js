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
  LISTENING
} from '../../constant/paperConst'

const ListeningBar = ({
  partSelect
}) => (
  <CardItem button onPress={()=>partSelect(LISTENING)}>
    <H1>
      Part III Listening
    </H1>
  </CardItem>
)

const ListeningContent = ({
  // title,
  // level,
  // date,s
  onInputChange,
  // answer,
  // question,
  partSelect,
}) => (
  <View>
    <ListeningBar partSelect={partSelect} />

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

    {/* <CardItem>
      <Text>
        {question}
      </Text>
    </CardItem> */}

    {/* <Textarea
      rowSpan={5}
      value={answer}
      placeholder="Write your answer here..."
      onChangeText={(value) => onInputChange('listeningSheet.answer',value)}
    /> */}


    <ListeningBar partSelect={partSelect} />
  </View>
)


const Listening = ({
  // title,
  // level,
  // date,
  listening,
  listeningSheet,
  onInputChange,
  partSelect,
  partSelected
}) => {
  // const {
  //   question
  // } = listening

  // const {
  //   answer
  // } = listeningSheet || {}
  return (
    <View>
  {
    partSelected === LISTENING
      ? (
        <ListeningContent
          partSelect={partSelect}
          // answer={answer}
          onInputChange={onInputChange}
          // title={title}
          // date={date}
          // level={level}
          // question={question}
        />)
      :(<ListeningBar partSelect={partSelect} />)
  }
  </View>
  )
}

export default Listening