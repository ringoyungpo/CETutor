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
type Props = {
  navigation: Function
}

@observer
class PaperScreen extends Component < Props > {
  static navigationOptions = {
    title: 'Paper Page'
    // title: this.props.navigation.getParam('mode') === TEST ? ('Testing Mode') : ('Practice Mode')
  }
  constructor(props: any) {
    super(props)
    PaperStore.InitAsync(this.props.navigation.getParam('_id'))
  }

  componentWillUnmount() {
    PaperStore.sound && PaperStore.sound.stop()
    PaperStore.UnmountPaperScreen()
  }

  render() {
    const mode = this.props.navigation.getParam('mode')
    const {
      paper,
      downloading,
      onInputChange,
      partSelect,
      audioPlaying,
      partSelected,
      sectionSelect,
      sectionSelected,
      playAudio
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
      <Card>
        <PaperHeader
          date={date} title={title} level={level}
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

        />


        <Translation
          translation={translation}
          onInputChange={onInputChange}
          partSelect={partSelect}
          partSelected={partSelected}
        />
      </Card>
    )

    const downloadingContent = (
      <Text>Downloading</Text>
    )

    return (
      <Container>
        <Content>

            {downloading?(downloadingContent):(PaperContent)}

        </Content>
      </Container>)
  }
}

export default PaperScreen