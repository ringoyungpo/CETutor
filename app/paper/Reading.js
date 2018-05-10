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
  console.log({
    bankedCloze,
    locating,
    selection
  })
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
            <CardItem header button onPress={()=>sectionSelect(sectionIndex)}>
              <H3>
                Sections {String.fromCharCode(sectionIndex+65)} {_.startCase(sectionValue.replace('_', ' ').toLowerCase())}
              </H3>
            </CardItem>
            {
              sectionSelected===sectionIndex?(
                <View>
                  {
                    sectionValue==='bankedCloze'&&(
                      <BankedCloze
                        bankedCloze={bankedCloze}
                      />
                    )
                  }
                  {
                    sectionValue==='locating'&&(<Locating/>)
                  }
                  {
                    sectionValue==='selection'&&(<Selection/>)
                  }
                </View>
              ):null
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
  bankedCloze
}) => {
  let {
    passage
  } = bankedCloze
  passage = passage.split('__')
  const last = passage.pop()
  return (
    <View>
      <CardItem>
        <Text>
        {/* <Text> */}
          {passage.map((passageValue,passageIndex)=>{
            return (
                <Text key={passageIndex}>
                  {passageValue}
                  <Text style={{textDecorationLine:'underline'}}>
                    {'  '+(passageIndex + 1)+'  '}
                  </Text>
                </Text>

            )
          })}
            {last}
          </Text>
        {/* </Text> */}
      </CardItem>
    </View>
  )
}

const Locating = () => {
  return (
    <View>
      <Text>
        Locating
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