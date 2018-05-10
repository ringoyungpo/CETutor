import React from 'react'
import Moment from 'react-moment'
import {
  Text,
  View,
  Card,
  CardItem,
  H1,
  H2,
  H3,
  Form,
  Spinner,
  Icon,
  Left,
  Body,
  Right,
  Picker,
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
  partSelected,
  sectionSelect,
  sectionSelected
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
          sectionSelect={sectionSelect}
          sectionSelected={sectionSelected}
          onInputChange={onInputChange}
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
      Part III Reading Comprehension
    </H2>
  </CardItem>
)


const SectionBar = ({
  sectionValue,
  sectionIndex,
  sectionSelect
}) => {
  return (
    <CardItem header button onPress={()=>sectionSelect(sectionIndex)}>
      <H3>
        Sections {String.fromCharCode(sectionIndex+65)} {_.startCase(sectionValue.replace('_', ' ').toLowerCase())}
      </H3>
    </CardItem>
  )
}

const ReadingContent = ({
  onInputChange,
  sections,
  sectionSelect,
  sectionSelected,
  partSelect,
}) => {
  const {
    bankedCloze,
    locating,
    selection
  } = sections
  return (
    <View>
    <ReadingBar partSelect={partSelect} />
    <Icon type="Entypo" active name="chevron-thin-down" />

    {
      ['bankedCloze',
      'locating',
      'selection'].map((sectionValue, sectionIndex)=>{
        return (
          <View key={sectionIndex}>

            {
              sectionSelected===sectionIndex?(

                <View>
                  <SectionBar sectionValue={sectionValue} sectionIndex={sectionIndex} sectionSelect={sectionSelect}/>
                  <CardItem>
                    <Icon type="Entypo" active name="chevron-thin-down" />
                  </CardItem>

                  {
                    sectionValue==='bankedCloze'&&(
                      <BankedCloze
                        bankedCloze={bankedCloze}
                        onInputChange={onInputChange}
                      />
                    )
                  }
                  {
                    sectionValue==='locating'&&(
                      <Locating locating={locating} onInputChange={onInputChange}/>
                    )
                  }
                  {
                    sectionValue==='selection'&&(<Selection selection={selection}/>)
                  }
                  <CardItem>
                    <Icon type="Entypo" active name="chevron-thin-up" />
                  </CardItem>

                  <SectionBar sectionValue={sectionValue} sectionIndex={sectionIndex} sectionSelect={sectionSelect}/>

                </View>

              ):(
                <SectionBar sectionValue={sectionValue} sectionIndex={sectionIndex} sectionSelect={sectionSelect}/>
              )
            }
          </View>
        )
      })
    }
    <Icon type="Entypo" active name="chevron-thin-up" />
    <ReadingBar partSelect={partSelect} />
  </View>
  )
}

const BankedCloze = ({
  bankedCloze,
  onInputChange
}) => {
  let {
    passage,
    options,
    orderSelected,
    bankedClozing
  } = bankedCloze
  passage = passage.split('__')
  return (
    <View>
      <CardItem header>
        <Text>
          Directions:
        </Text>
      </CardItem>
      <CardItem>
        <Text>
          In this section, there is a passage with ten blanks. You are required to select one word for each blank from a list of choices given in a word bank following the passage. Read the passage through carefully before making your choices. Each choice in the bank is identified by a letter. Please mark the corresponding letter for each item on Answer Sheet with a single line through the centre. You may not use any of the words in the bank more than once.
        </Text>
      </CardItem>
      <CardItem>
        <Text>
          {passage.map((passageValue,passageIndex)=>{
            return (
                <Text key={passageIndex}>
                  {passageIndex>0&&(bankedClozing===passageIndex?(
                    <Text style={{
                      fontWeight: 'bold',
                    }}>
                      [
                        {options.map((optionValue, optionIndex)=>{
                          return (
                            <Text key={optionIndex}>
                              {optionIndex>0?(
                                <Text>
                                  ,
                                </Text>
                              ):null}
                              <Text
                                onPress={()=>onInputChange(`reading.sections.bankedCloze.orderSelected.${passageIndex-1}`, optionIndex)}>
                                {optionValue}
                              </Text>
                            </Text>
                          )
                        })}
                      ]
                    </Text>
                  ):(
                    <Text style={{textDecorationLine:'underline',fontWeight: 'bold'}}
                      onPress={()=>onInputChange('reading.sections.bankedCloze.bankedClozing', passageIndex)}>
                      {'  '}{orderSelected[passageIndex-1]!==null?(options[orderSelected[passageIndex-1]]):(passageIndex)}{'  '}
                    </Text>
                  )
                    )}
                  {passageValue}
                </Text>
            )
          })}
        </Text>
      </CardItem>
    </View>
  )
}

const Locating = ({
  locating,
  onInputChange
}) => {
  const {
    title,
    paragraphs,
    questions
  } = locating
  return (
    <View>
      <CardItem header>
        <Text>
          Directions:
        </Text>
      </CardItem>
      <CardItem>
        <Text>
          In this section, you are going to read a passage with ten statements attached to it. Each statement contains information given in one of the paragraphs. Identify the paragraph from which the information is derived. You may choose a paragraph more than once. Each paragraph is marked with a letter. Answer the questions by marking the corresponding letter on Answer Sheet.
        </Text>
      </CardItem>
      <CardItem header>
        <Text>
          {title}
        </Text>
      </CardItem>
      {paragraphs.map((paragraphValue, paragraphIndex)=>{
        return(
          <View key={paragraphIndex}>
            <CardItem>
              <Text>
                <Text style={{fontWeight: 'bold'}}>
                  [{String.fromCharCode(paragraphIndex+65)}]
                </Text>
                {paragraphValue}
              </Text>
            </CardItem>
          </View>
        )
      })}

      {questions.map((questionValue,questionIndex)=>{
        const {questionContent,optionSelected}=questionValue
        return(
          <View key={questionIndex}>
            <CardItem>
              <Text>
                {questionIndex+1}. {questionContent}
              </Text>
            </CardItem>
            <Picker
              mode="dropdown"
              selectedValue={optionSelected}
              onValueChange={(value)=>onInputChange(`reading.sections.locating.questions.${questionIndex}.optionSelected`,value) }
            >
              <Picker.Item label={''} value={null} />

              {paragraphs.map((paragraphValue, paragraphIndex)=>{
                return(
                  <Picker.Item key={paragraphIndex} label={`[${String.fromCharCode(paragraphIndex+65)}]${paragraphValue}`} value={paragraphIndex} />
                )
              })}
            </Picker>
          </View>
        )
      })}
    </View>
  )
}
const Selection = ({
  selection
}) => {
  const {
    passages
  } = selection
  return (
    <View>
      <CardItem header>
        <Text>
          Directions:
        </Text>
      </CardItem>
      <CardItem>
        <Text>
          There are {passages.length} passages in this section. Each passage is followed by some questions or unfinished statements. For each of them there are four choices marked A),B),C) and D).You should decide on the best choice and mark the corresponding letter on Answer Sheet with a single line through the centre.
        </Text>
      </CardItem>
      {passages.map((passageValue, passageIndex)=>{
        const {questions,passageContent} = passageValue
        return(
          <View key={passageIndex}>
            <CardItem header>
              <Text>
                Passage {passageIndex+1}
              </Text>
            </CardItem>
            <CardItem header>
              <Text>
                Questions 1 to {questions.length} are based on the following passage.
              </Text>
            </CardItem>
            <CardItem>
              <Text>
                {passageContent}
              </Text>
            </CardItem>
            {questions.map((questionValue,questionIndex)=>{
              const {questionContent,options} = questionValue
              return(
                <View key={questionIndex}>
                  <CardItem header>
                    <Text>
                      {questionIndex+1}. {questionContent}
                    </Text>
                  </CardItem>
                  {options.map((optionValue, optionIndex)=>{
                    return(
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
    </View>
  )
}

export default Reading