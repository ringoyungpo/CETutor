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
  Right,
  Button,
  Textarea,
} from 'native-base'
import {
  LISTENING
} from '../../constant/paperConst'

import _ from 'lodash'

const Listening = ({
  // title,
  // level,
  // date,
  listening,
  listeningSheet,
  onInputChange,
  partSelect,
  partSelected,
  sectionSelect,
  sectionSelected
}) => {
  const {
    sections
  } = listening

  const {
    sectionsSheet
  } = listeningSheet || {}
  return (
    <View>
  {
    partSelected === LISTENING
      ? (
        <ListeningContent
          partSelect={partSelect}
          // answer={answer}
          onInputChange={onInputChange}
          sections={sections}
          sectionsSheet={sectionsSheet}
          sectionSelect={sectionSelect}
          sectionSelected={sectionSelected}
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

const ListeningBar = ({
  partSelect
}) => (
  <CardItem button onPress={()=>partSelect(LISTENING)}>
    <H1>
      Part II Listening
    </H1>
  </CardItem>
)

const ListeningContent = ({
  // title,
  // level,
  // date,s
  sections,
  sectionsSheet,
  onInputChange,
  sectionSelect,
  sectionSelected,
  // answer,
  // question,
  partSelect,
}) => (
  <View>
    <ListeningBar partSelect={partSelect} />
    <Icon type="Entypo" active name="chevron-thin-down" />

    {sections.map((sectionValue, sectionIndex)=>{
      let {sectionTitle, modules} = sectionValue
      sectionTitle = _.startCase(sectionTitle.replace('_', ' ').toLowerCase())
      return (
        <View key={sectionIndex}>
          {sectionSelected===sectionIndex?(
            <SectionContent
              modules={modules}
              sectionTitle={sectionTitle}
              sectionIndex={sectionIndex}
              sectionSelect={sectionSelect}
            />
          ):(<SectionBar
            sectionTitle={sectionTitle}
            sectionIndex={sectionIndex}
            sectionSelect={sectionSelect}
          />)}
          {/* <CardItem header>
            <Text>
              Directions:
            </Text>
          </CardItem>

          <CardItem>
            <Text>
              For this part, you are allowed 30 minted to translate a passage from Chinese into English. You should write your answer on Answer Sheet.
            </Text>
          </CardItem> */}
        </View>
      )
    })}

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

    <Icon type="Entypo" active name="chevron-thin-up" />

    <ListeningBar partSelect={partSelect} />
  </View>
)

const SectionBar = ({
  sectionTitle,
  sectionIndex,
  sectionSelect
}) => (
  <CardItem header button onPress={()=>sectionSelect(sectionIndex)}>
    <H2>
      Sections {String.fromCharCode(sectionIndex+65)} {_.startCase(sectionTitle.replace('_', ' ').toLowerCase())}
    </H2>
  </CardItem>
)

const SectionContent = ({
  sectionTitle,
  sectionIndex,
  sectionSelect,
  modules
}) => (
  <View>
    <SectionBar
      sectionTitle={sectionTitle}
      sectionIndex={sectionIndex}
      sectionSelect={sectionSelect}
    />
    <CardItem header >
      <Icon type="Entypo" active name="chevron-down" />
    </CardItem>
    {modules.map((moduleValue, moduleIndex)=>{
      return (
        <View key={moduleIndex}>
          <CardItem header >
            <Text>
              {sectionTitle+' '+(moduleIndex+1)}
            </Text>
            <Right>
              <Button dark disabled={false} onPress={()=>console.log('aha')}>
                <Icon type={'Entypo'} name="controller-play" />
              </Button>
            </Right>
          </CardItem>
          <CardItem header >
            <Text>
              Directions:
            </Text>
          </CardItem>
          <CardItem>
            <Text>
              {`In this section, you will hear ${modules.length} ${sectionTitle.toLowerCase()}. At the end of each ${sectionTitle.toLowerCase()}, you will hear several questions. Both the ${sectionTitle.toLowerCase()} and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A), B), C) and D). Then mark the corresponding letter on Answer Sheet with a single line through the centre.`}
            </Text>
          </CardItem>
        </View>
      )
    })}
    <CardItem header >
      <Icon type="Entypo" active name="chevron-up" />
    </CardItem>
    <SectionBar
      sectionTitle = {sectionTitle}
      sectionIndex = {sectionIndex}
      sectionSelect = {sectionSelect}
    />
  </View>
)

export default Listening