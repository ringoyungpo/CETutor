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
  AsyncStorage
} from 'react-native'


import {
  Col,
  Row,
  Grid
} from 'react-native-easy-grid';

import {
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
  Label
} from 'native-base';
import SignInInput from './SignInStore'
import {
  observer
} from 'mobx-react'

@observer
class SignInScreen extends Component < {
  navigation: Function
}, {} > {
  static navigationOptions = {
    title: 'Please sign in'
  }

  render() {
    const {
      nickname,
      password,
      onInputChange
    } = SignInInput
    return (<Container>
      <Content>
        <Form>
          <Row style={{ height: 100 }}/>
          <Item stackedLabel>
              <Label>Nickname</Label>
            <Input value={nickname} onChangeText={value => onInputChange('nickname', value)}/>
          </Item>
          <Item stackedLabel last="last" >
                <Label>Password</Label>
            <Input value={password} onChangeText={value => onInputChange('password', value)}/>
          </Item>
            <Row style={{ height: 100 }}/>
          <Body><Button full light onPress={()=>this._signInAsync(nickname,
          password)}>
            <Text>Sign In</Text>
          </Button></Body>
        </Form>
      </Content>      
    </Container>)
  }
  _signInAsync = async (nickname, password) => {

    await AsyncStorage.setItem('userToken', 'abc')
    this.props.navigation.navigate('App')
  }
}

export default SignInScreen