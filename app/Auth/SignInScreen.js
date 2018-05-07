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
    const userData = {
      email: email,
      password: password
    }
    console.log(JSON.stringify(userData))

    try {
      const {
        response
      } = await axios.post(API_BASE + 'api/users/token', userData)
      console.log('success')
      const {
        data
      } = response

      console.log(JSON.stringify(data))

      const {
        token
      } = res.data
      await AsyncStorage.setItem('jwtToken', token)
    } catch (e) {
      console.log('fail')
      console.log(JSON.stringify(e.response.data))
    }




    // .then(res => {


    // setAuthToken(token)
    // const decode = jwt_decode(token)
    // dispatch(setSubmitted())
    // dispatch(setCurrentUser(decode))
    // dispatch({
    //   type: CLEAR_LOGIN_INPUT
    // })
    // })
    // .catch(err => {
    //   console.log(JSON.stringify(err))
    // dispatch(setSubmitted())
    // dispatch({
    //   type: GET_ERRORS,
    //   payload: err.response.data
    // })
    // })
    // console.log(JSON.stringify({
    //   email,
    //   password
    // }))
    // await AsyncStorage.setItem('userToken', 'abc')
    // this.props.navigation.navigate('App')
  }
}

export default SignInScreen