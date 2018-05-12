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
  Button
  //   View,
} from 'react-native'
import CurrentUserStore from '../navigation/CurrentUserStore'
import PaperList from './PaperList'
import {
  Container,
  Header,
  Content,
  Body,
  Card,
  CardItem,
  Text,
  Icon,
  View,
  Spinner,
  Right,
  StyleProvider,
} from 'native-base';
import HostoryListStore from './HostoryListStore'
import {
  isEmpty
} from 'lodash'
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

  constructor() {
    super()
    const {
      historyList,
      downloading,
      InitAsync
    } = HostoryListStore
    if (isEmpty(historyList) && downloading === false) {
      InitAsync()
    }
  }

  _showPaper = async (_id, mode) => {
    this.props.navigation.navigate('Paper', {
      _id: _id,
      mode: mode
    })
  }

  render() {
    const {
      historyList,
      downloading,
      InitAsync
    } = HostoryListStore
    return (
      <Container>
        <Content>
          {/* <Text>{JSON.stringify({
            downloading,
            paperList
          })}</Text> */}

            {downloading?(<Spinner/>):(
              isEmpty(historyList)?(
                <Card>
                  <CardItem>
                    <Body>
                      <Text>
                        You didn't have any test history
                      </Text>
                    </Body>
                  </CardItem>
                </Card>
              ):(
                <PaperList historyMode={true} _showPaper={this._showPaper} paperList={historyList}/>
              )
            )}


        {/* <Text>{JSON.stringify(CurrentUserStore)}</Text>
        <Text>app here</Text>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View> */}
        </Content>
      </Container>
    )
  }
}

export default HistoryScreen