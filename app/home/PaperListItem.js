/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';

import Moment from 'react-moment'

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Left,
  Button,
  Right
} from 'native-base';
import {
  CET_4,
  CET_6,
  PRACTICE,
  TEST,
  REVIEW
} from '../../constant/paperConst'

type Props = {
  _showPaper: Function,
  historyMode: boolean,
  paper: {
    _id: string,
    title: string,
    level: string,
    date: Date
  }
}

import {
  observer
} from 'mobx-react'

import HostoryListStore from './HostoryListStore'

@observer
class PaperListItem extends Component < Props > {

  render() {
    const {
      paper,
      _showPaper,
      historyMode
    } = this.props
    const {
      _id,
      title,
      level,
      date,
    } = paper

    const {
      deleteAsync,
      InitAsync
    } = HostoryListStore

    return (
      <CardItem button onPress={()=>_showPaper(_id, historyMode?REVIEW:PRACTICE)}>
        <Left>
          {
            level===CET_4
              ?(<Icon type="MaterialCommunityIcons" active name="numeric-4-box-outline" />)
              :(level===CET_6
                ?(<Icon type="MaterialCommunityIcons" active name="numeric-6-box-outline" />)
                :null
              )
          }
          <Text>{title}</Text>
        </Left>

        <Right>
          <Moment element={Text} fromNow ago>{date}</Moment>
          {
            historyMode?(
              <Button danger onPress={async()=>{
                await deleteAsync(_id)
                await InitAsync()
              }}>
                <Icon type="Entypo" name="cross" />

              </Button>
            ):(
              <Button info onPress={()=>_showPaper(_id, TEST)}>
                <Icon name="arrow-forward" />
              </Button>
            )
          }
        </Right>
      </CardItem>
    );
  }

}

export default PaperListItem