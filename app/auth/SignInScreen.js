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
import jwt_decode from 'jwt-decode'
import {
  observer
} from 'mobx-react'
import isEmpty from 'lodash'
import setAuthToken from '../utils/setAuthToken'
import CurrentUserStore from '../navigation/CurrentUserStore'

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
      submitting,
      onInputChange,
      signInAsync
    } = SignInInputStore
    return (<Container>
      <Content>
        <Form>
          <Row style={{ height: 32 }}/>
          <Body><H1>CETutor</H1>
          <Row style={{ height: 16 }}/>
          <Text>A Better Way To Prepare For CET</Text></Body>
          <Row style={{ height: 32 }}/>

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
          <Button full info={!submitting} disabled={submitting} onPress={async()=>{
            const token = await signInAsync({email,password})
            if(token){
              // console.log('success'+token)
            await AsyncStorage.setItem('jwtToken', token)
            setAuthToken(token)
            const decoded = jwt_decode(token)
            CurrentUserStore.init(decoded)
            this.props.navigation.navigate('App')}
          }}>
            <Text>Sign In</Text>
          </Button>
          <Row style={{ height: 8 }}/>

          <Button full info onPress={()=>this.props.navigation.navigate('SignUp')}><Text>Sign Up</Text></Button>
        </Form>
      </Content>
    </Container>)
  }
}

export default SignInScreen