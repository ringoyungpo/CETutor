/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react'
import {
  StackNavigator,
  SwitchNavigator
} from 'react-navigation' // Version can be specified in package.json
import {
  //   ActivityIndicator,
  AsyncStorage,
  //   Button,
  //   StatusBar,
  StyleSheet,
  //   View,
} from 'react-native'
import CurrentUserStore from '../navigation/CurrentUserStore'
import PaperList from '../paper/PaperList'
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right,
  StyleProvider
} from 'native-base';
import PaperListStore from './PaperListStore'
import isEmpty from 'lodash'
import {
  observer
} from 'mobx-react'

@observer
class HomeScreen extends Component < {
  navigation: Function
}, {} > {
  static navigationOptions = {
    title: 'Welcome to the app!'
  }
  constructor() {
    super()
    const {
      paperList,
      downloading,
      InitAsync
    } = PaperListStore
    if (isEmpty(paperList) && downloading === false) {
      InitAsync()
    }
  }

  render() {
    const {
      paperList,
      downloading,
      InitAsync
    } = PaperListStore
    return (
      // <View style={styles.container}>
      <Container>
        <Content>
          {/* <Text>{JSON.stringify({
            downloading,
            paperList
          })}</Text> */}

            {downloading?(<Text>Downloading</Text>):(<PaperList paperList={paperList}/>)}

        {/* <Text>{JSON.stringify(CurrentUserStore)}</Text>
        <Text>app here</Text>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View> */}
        </Content>
      </Container>

    )
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other')
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear()
    this.props.navigation.navigate('Auth')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default HomeScreen