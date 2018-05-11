/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react'
import axios from 'axios'
import {
  StackNavigator,
  SwitchNavigator
} from 'react-navigation' // Version can be specified in package.json
import {
  AsyncStorage
} from 'react-native'


import {
  Col,
  Row,
  Grid
} from 'react-native-easy-grid';

import {
  H1,
  H2,
  H3,
  Container,
  Header,
  Content,
  Text,
  Form,
  Item,
  Input,
  Button,
  Body,
  Card,
  CardItem,
  Label,
  View,
} from 'native-base';
import PaperStore from './PaperStore'
import {
  API_BASE
} from '../../config/keys'
import jwt_decode from 'jwt-decode'
import {
  observer
} from 'mobx-react'
import {
  TEST,
  SUBMITTING,
  PRACTICE
} from '../../constant/paperConst'
import isEmpty from 'lodash'
import setAuthToken from '../utils/setAuthToken'
import CurrentUserStore from '../navigation/CurrentUserStore'
import PaperHeader from './PaperHeader'
import Writing from './Writing'
import Listening from './Listening'
import Reading from './Reading'
import Translation from './Translation'
import AnswerSheet from './AnswerSheet'
type Props = {
  navigation: Function
}

@observer
class PaperScreen extends Component < Props > {
  static navigationOptions = {
    title: 'Paper Page'
    // title: this.props.navigation.getParam('mode') === TEST ? ('Testing Mode') : ('Practice Mode')
  }
  async init() {
    const paper = await PaperStore.InitAsync(this.props.navigation.getParam('_id'))
    if (isEmpty(paper)) {
      this.props.navigation.navigate('App')
    }
  }

  constructor(props: any) {
    super(props)
    this.init()
    const mode = this.props.navigation.getParam('mode')
    PaperStore.setMode(mode)


  }

  componentWillUnmount() {
    PaperStore.sound && PaperStore.sound.stop()
    PaperStore.UnmountPaperScreen()
  }

  render() {
    const {
      paper,
      downloading,
      onInputChange,
      partSelect,
      audioPlaying,
      partSelected,
      sectionSelect,
      sectionSelected,
      playAudio,
      setMode,
      showAnswerSheet,
      toggleAnswerSheet,
      submitAsync,
      submitting
    } = PaperStore

    let {
      mode
    } = PaperStore

    const {
      title,
      level,
      date,
      writing,
      reading,
      listening,
      translation,
    } = paper


    const PaperContent = (
      <View>
        <Card>
          <PaperHeader
            date={date} title={title} level={level} mode={mode}
            partSelect={partSelect} partSelected={partSelected}
          />

          <Writing
            writing={writing}
            onInputChange={onInputChange}
            partSelect={partSelect} partSelected={partSelected}
          />

          <Listening
            listening={listening}
            onInputChange={onInputChange}
            partSelect={partSelect}
            partSelected={partSelected}
            sectionSelect={sectionSelect}
            sectionSelected={sectionSelected}
            audioPlaying={audioPlaying}
            playAudio={playAudio}
            mode={mode}
          />

          <Reading
            reading={reading}
            onInputChange={onInputChange}
            partSelect={partSelect}
            partSelected={partSelected}
            sectionSelect={sectionSelect}
            sectionSelected={sectionSelected}
            mode={mode}

          />


          <Translation
            translation={translation}
            onInputChange={onInputChange}
            partSelect={partSelect}
            partSelected={partSelected}
          />
        </Card>
      </View>
    )

    const answerSheetContent = (
      <AnswerSheet
        writing={writing}
        reading={reading}
        listening={listening}
        translation={translation}
        mode={mode}
        showAnswerSheet={showAnswerSheet}
        toggleAnswerSheet={toggleAnswerSheet}
      />)


    const downloadingContent = (
      <Text>Downloading</Text>
    )

    const completeButton = (
      <View>
        {
          mode === TEST&&(
            <Card>
              <Button block button onPress={async ()=>{
                setMode(SUBMITTING)
              }}>
                <Text>Complete</Text>
              </Button>
            </Card>
          )
        }
      </View>
    )

    const submitButton = (
      <View>
        {
          mode === SUBMITTING&&(
            <Card>
              <Button block button disabled={submitting} onPress={async ()=>{
                const success = await submitAsync()
                if(success){
                  this.props.navigation.pop()
                }
              }}>
                <Text>Submit</Text>
              </Button>
            </Card>
          )
        }
      </View>
    )

    return (
      <Container>
        <Content>

            {downloading?(downloadingContent):(
              <View>
                {
                  mode!==SUBMITTING&&(
                    PaperContent
                  )
                }
                {answerSheetContent}
                {completeButton}
                {submitButton}
              </View>
            )}

        </Content>
      </Container>)
  }
}

export default PaperScreen