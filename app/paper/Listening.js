import React from 'react'
import Moment from 'react-moment'
import {
  Text,
  Card,
  CardItem,
  H1,
  H2,
  H3,
  View,
  Icon,
  Left,
  Right,
  Button,
  Textarea,
} from 'native-base'
import {
  TEST,
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
  sectionSelected,
  audioPlaying,
  playAudio,
  mode
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
          audioPlaying={audioPlaying}
          playAudio={playAudio}
          mode={mode}
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
    <H2>
      Part II Listening Comprehension
    </H2>
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
  audioPlaying,
  playAudio,
  mode
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
              audioPlaying={audioPlaying}
              playAudio={playAudio}
              mode={mode}
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
    <H3>
      Sections {String.fromCharCode(sectionIndex+65)} {_.startCase(sectionTitle.replace('_', ' ').toLowerCase())}
    </H3>
  </CardItem>
)


const SectionContent = ({
  sectionTitle,
  sectionIndex,
  sectionSelect,
  modules,
  audioPlaying,
  playAudio,
  mode
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
    {modules.map((moduleValue, moduleIndex)=>{
      const {moduleSound,questions}=moduleValue
      const {url, playing, played} =moduleSound
      return (
        <View key={moduleIndex}>
          <CardItem header>
            <Text>
              {sectionTitle+' '+(moduleIndex+1)}
            </Text>
          </CardItem>
          <CardItem header >
            <Left>
              <Text>
                {`Questions 1 to ${questions.length} are based on the conversation you have just heard.`}
              </Text>
            </Left>
            {!played&&(<Right>
              {!playing
                ?(<Button  disabled={audioPlaying===true} onPress={()=>{
                playAudio(url, mode,`listening.sections.${sectionIndex}.modules.${moduleIndex}.moduleSound`)
                // if(mode===TEST){
                //   console.log('TODO audio played')
                // }
              }}>
                <Icon type={'Entypo'} name="controller-play" />
              </Button>):(
                <Button>
                  <Icon type={'MaterialCommunityIcons'} name="headset"/>
                </Button>
              )}
            </Right>)}
          </CardItem>
          {questions.map((questionValue,questionIndex)=>{
            const {options, questionSound} = questionValue
            const {url, playing, played}=questionSound
            return (
              <View key={questionIndex}>
                <CardItem header>
                  <Left>
                    <Text>
                      {questionIndex+1}.
                    </Text>
                  </Left>
                  {!played&&(<Right>
                    {!playing
                      ?(<Button  disabled={audioPlaying===true} onPress={()=>{
                      playAudio(url, mode,`listening.sections.${sectionIndex}.modules.${moduleIndex}.questions.${questionIndex}.questionSound`)
                    }}>
                      <Icon type={'Entypo'} name="controller-play" />
                    </Button>):(
                      <Button>
                        <Icon type={'MaterialCommunityIcons'} name="headset"/>
                      </Button>
                    )}
                  </Right>)}
                </CardItem>
                {options.map((optionValue, optionIndex)=>{
                  return (
                    <View key={optionIndex}>
                      <CardItem>
                        <Text>
                          {String.fromCharCode(optionIndex+65)}. {optionValue}
                        </Text>
                      </CardItem>
                    </View>
                  )
                })}
              </View>
            )
          })}
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