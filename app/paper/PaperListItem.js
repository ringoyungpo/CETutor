/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Left,
  Right
} from 'native-base';

type Props = {
  title: string
}

class PaperListItem extends Component < Props > {
  render() {
    return (
      <CardItem>
        {/* <Icon active name="logo-googleplus" /> */}
        <Left><Text>{this.props.title}</Text></Left>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </CardItem>
    );
  }

}

export default PaperListItem