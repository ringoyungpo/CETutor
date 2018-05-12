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
  Spinner,
  Right,
  StyleProvider,
  Button,
  View

} from 'native-base';
import PaperListStore from './PaperListStore'
import {
  isEmpty
} from 'lodash'
import {
  Image
} from 'react-native'
import {
  observer
} from 'mobx-react'
import Moment from 'react-moment'


@observer
class InfoScreen extends Component < {
  navigation: Function
}, {} > {
  static navigationOptions = {
    tabBarIcon: ({
      focused,
      tintColor
    }) => {
      const iconName = `ios-information-circle${focused ? '' : '-outline'}`
      return <Icon name={iconName} style={{color:tintColor}} />;
    }
  }

  render() {
    const {
      user
    } = CurrentUserStore
    const {
      avatar,
      email,
      nickname,
      date
    } = user
    console.log(user)
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Image source={{uri: 'https:'+avatar}} style={{height: 360, width: 360, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Text>
                <Text style={{
                  fontWeight: 'bold',
                }}>Nickname: </Text>
                {nickname}
              </Text>
            </CardItem>
            <CardItem>
              <Text>
                <Text style={{
                  fontWeight: 'bold',
                }}>E-mail: </Text>
                {email}
              </Text>
            </CardItem>
            {/* <CardItem>
                <Text style={{
                  fontWeight: 'bold',
                }}>Sign Up Date: </Text>
              <Moment element={Text} fromNow ago>{date}</Moment>
            </CardItem> */}

          </Card>
          <Card>

              <Button block onPress={async()=>{
                this.props.navigation.navigate('Auth')
                await AsyncStorage.clear()
              }}>
                <Text>
                  Logout
                </Text>
              </Button>

          </Card>
        </Content>
      </Container>
    )
  }
}

export default InfoScreen