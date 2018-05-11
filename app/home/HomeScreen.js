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
  Button

} from 'native-base';
import PaperListStore from './PaperListStore'
import {
  isEmpty
} from 'lodash'
import {
  observer
} from 'mobx-react'

@observer
class HomeScreen extends Component < {
  navigation: Function
}, {} > {
  static navigationOptions = {
    tabBarIcon: ({
      focused,
      tintColor
    }) => {
      const iconName = `ios-paper${focused ? '' : '-outline'}`
      return <Icon name={iconName} style={{color:tintColor}} />;
    }

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

            {downloading?(<Spinner/>):(<PaperList _showPaper={this._showPaper} paperList={paperList}/>)}

        {/* <Text>{JSON.stringify(CurrentUserStore)}</Text>
        <Text>app here</Text>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View> */}
        </Content>
      </Container>

    )
  }

  _showPaper = (_id, mode) => {
    this.props.navigation.navigate('Paper', {
      _id: _id,
      mode: mode
    })
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