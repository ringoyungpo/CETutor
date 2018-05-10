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
  // title,
  // level,
  // date,s
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
                      <Locating locating={locating}/>
                    )
                  }
                  {
                    sectionValue==='selection'&&(<Selection/>)
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
    {/* <CardItem header>
      <Text>
        DirecASDFASDFtions:
      </Text>
    </CardItem> */}



    {/* <CardItem>
      <Text>
        {JSON.stringify(sections)}
      </Text>
    </CardItem> */}


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

const Locating = (locating) => {
  return (
    <View>
      <Text>
        {JSON.stringify(locating)}
      </Text>
    </View>
  )
}
const Selection = () => {
  return (
    <View>
      <Text>
        selection
      </Text>
    </View>
  )
}

export default Reading