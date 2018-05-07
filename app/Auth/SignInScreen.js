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
  H1,
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
      email,
      password,
      onInputChange
    } = SignInInput
    return (<Container>
      <Content>
        <Form>
          <Row style={{ height: 50 }}/>
          <Body><H1>CETutor</H1>
          <Row style={{ height: 25 }}/>

          <Text>A Better Way To Prepare For CET</Text></Body>
          <Row style={{ height: 50 }}/>


          <Item stackedLabel>
              <Label>E-mail</Label>
            <Input value={email} onChangeText={value => onInputChange('email', value)}/>
          </Item>
          <Item stackedLabel last="last" >
                <Label>Password</Label>
            <Input secureTextEntry={true} value={password} onChangeText={value => onInputChange('password', value)}/>
          </Item>
            <Row style={{ height: 100 }}/>
          <Button full info onPress={()=>this._signInAsync(email,
          password)}>
            <Text>Sign In</Text>
          </Button>
        </Form>
      </Content>
    </Container>)
  }
  _signInAsync = async (email, password) => {
    // console.log(JSON.stringify({
    //   email,
    //   password
    // }))
    await AsyncStorage.setItem('userToken', 'abc')
    this.props.navigation.navigate('App')
  }
}

export default SignInScreen