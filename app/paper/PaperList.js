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
  Right
} from 'native-base';
import PaperListItem from './PaperListItem'


type Props = {
  paperList: Array < {
    _id: string,
    title: string,
    level: string,
    date: Date
  } >
}

class PaperList extends Component < Props > {
  render() {
    return (
      <Card>
        {this.props.paperList.map((paperValue, paperIndex)=>{
          return(<PaperListItem key={paperIndex} paper={paperValue}/>)
        })}
      </Card>
    );
  }

}

export default PaperList