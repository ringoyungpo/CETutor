/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react'
import axios from 'axios'
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
import SignInInputStore from './SignInInputStore'
import {
  API_BASE
} from '../../config/keys'
import {
  observer
} from 'mobx-react'
import isEmpty from 'lodash'
import setAuthToken from '../utils/setAuthToken'

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
      errors,
      onInputChange
    } = SignInInputStore
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
          {errors.email?(<Body><Text style={{ color: 'red' }}>{errors.email}</Text></Body>):null}
          <Item stackedLabel last="last">
                <Label>Password</Label>
            <Input secureTextEntry={true} value={password} onChangeText={value => onInputChange('password', value)}/>
          </Item>
          {errors.password?(<Body><Text style={{ color: 'red' }}>{errors.password}</Text></Body>):null}
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
    const userData = {
      email: email,
      password: password
    }
    console.log(JSON.stringify(userData))

    try {
      const {
        data
      } = await axios.post(API_BASE + 'api/users/token', userData)

      console.log(JSON.stringify(data))
      const {
        token
      } = data
      await AsyncStorage.setItem('jwtToken', token)
      this.props.navigation.navigate('App')
      console.log('1')
    } catch (e) {
      const {
        onInputChange
      } = SignInInputStore
      onInputChange('errors', e.response.data)
    }
  }
}

export default SignInScreen