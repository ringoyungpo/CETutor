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
  TEST
} from '../../constant/paperConst'

type Props = {
  _showPaper: Function,
  paper: {
    _id: string,
    title: string,
    level: string,
    date: Date
  }
}

class PaperListItem extends Component < Props > {

  render() {
    const {
      _id,
      title,
      level,
      date
    } = this.props.paper
    return (
      <CardItem button onPress={()=>this.props._showPaper(_id, PRACTICE)}>

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
          <Button info onPress={()=>this.props._showPaper(_id, TEST)}>
            <Icon name="arrow-forward" />
          </Button>
        </Right>
      </CardItem>
    );
  }

}

export default PaperListItem