/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react'
import {
  //   ActivityIndicator,
  AsyncStorage,
  //   Button,
  //   StatusBar,
  StyleSheet,
  //   View,
} from 'react-native'
import CurrentUserStore from '../navigation/CurrentUserStore'
import PaperList from './PaperList'
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  View,
  Spinner,
  Right,
  StyleProvider
} from 'native-base';
import PaperListStore from './PaperListStore'
import isEmpty from 'lodash'
import {
  observer
} from 'mobx-react'

@observer
class HistoryScreen extends Component < {
  navigation: Function
}, {} > {
  static navigationOptions = {
    tabBarIcon: ({
      focused,
      tintColor
    }) => {
      const iconName = `ios-paper-plane${focused ? '' : '-outline'}`
      return <Icon name={iconName} style={{color:tintColor}} />;
    }
  }

  render() {
    return (
      <View>
        <Text>
          hellow
        </Text>
      </View>
    )
  }
}

export default HistoryScreen