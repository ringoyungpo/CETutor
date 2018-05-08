import {
  API_BASE
} from '../../config/keys'

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
  @observable submitting
  @observable token

  constructor() {
    this.email = 'ringoyungpo@163.com'
    this.password = 'woods'
    this.errors = {}
    this.submitting = false
    this.token = ''
  }

  @action.bound
  onInputChange(key, value) {
    this[key] = value
  }

  @action.bound
  signInAsync = flow(function*({
    email,
    password
  }) {
    const userData = {
      email: email,
      password: password
    }
    this.submitting = true

    try {
      const {
        data
      } = yield axios.post(API_BASE + 'api/users/token', userData)

      const {
        token
      } = data
      this.token = token
      // console.log(token)
    } catch (e) {
      this.errors = e.response.data
      // console.log(JSON.stringify(e.response.data))
    } finally {
      this.submitting = false
      // console.log('finally')
      return this.token
    }
  })

}

export default new SignInInputStore