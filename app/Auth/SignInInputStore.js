import {
  types
} from 'mobx-state-tree'

import {
  API_BASE
} from '../../config/keys'
import {
  AsyncStorage
} from 'react-native'

import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'

import {
  computed,
  action,
  flow,
  observable,
  configure

} from 'mobx'

configure({
  enforceActions: true
})

class SignInInputStore {
  @observable email
  @observable password
  @observable errors

  constructor() {
    this.email = 'ringoyungpo@163.com'
    this.password = 'woods'
    this.errors = {}
  }

  @action.bound
  onInputChange(key, value) {
    this[key] = value
  }

  @action.bound
  signInAsync = flow(function*(email, password) {
    const userData = {
      email: email,
      password: password
    }
    console.log(JSON.stringify(userData))

    try {
      const {
        data
      } = yield axios.post(API_BASE + 'api/users/token', userData)

      const {
        token
      } = data
      yield AsyncStorage.setItem('jwtToken', token)
      setAuthToken(token)
    } catch (e) {
      this.errors = e.response.data
    }
  })

}

export default new SignInInputStore