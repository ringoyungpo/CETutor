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
import isEmpty from 'lodash'
import setAuthToken from '../utils/setAuthToken'
import CurrentUserStore from '../navigation/CurrentUserStore'
import PaperHeader from './PaperHeader'
import Writing from './Writing'
import Listening from './Listening'
import Translation from './Translation'
type Props = {
  navigation: Function
}

@observer
class PaperScreen extends Component < Props > {
  static navigationOptions = {
    title: 'This is a paper'
  }
  constructor(props: any) {
    super(props)
    PaperStore.InitAsync(this.props.navigation.getParam('_id'))
  }

  render() {
    const {
      paper,
      answerSheet,
      downloading,
      onInputChange,
      partSelect,
      partSelected,
      sectionSelect,
      sectionSelected,
    } = PaperStore

    const {
      title,
      level,
      date,
      writing,
      listening,
      translation,
    } = paper

    const {
      writingSheet,
      listeningSheet,
      translationSheet
    } = answerSheet


    const PaperContent = (
      <Card>
        <PaperHeader
          date={date} title={title} level={level}
          partSelect={partSelect} partSelected={partSelected}
        />

        <Writing
          writing={writing}
          writingSheet={writingSheet}
          onInputChange={onInputChange}
          partSelect={partSelect} partSelected={partSelected}
        />

        <Listening
          listening={listening}
          listeningSheet={listeningSheet}
          onInputChange={onInputChange}
          partSelect={partSelect} 
          partSelected={partSelected}
          sectionSelect={sectionSelect}
          sectionSelected={sectionSelected}
        />

        <Translation
          translation={translation}
          translationSheet={translationSheet}
          onInputChange={onInputChange}
          partSelect={partSelect} partSelected={partSelected}
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