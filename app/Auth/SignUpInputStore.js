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

class SignUpInputStore {
  @observable nickname
  @observable email
  @observable password
  @observable passwordComfirmed
  @observable errors
  @observable submitting

  constructor() {
    this.nickname = 'ringoyungpo'
    this.email = 'ringoyungpo@163.com'
    this.password = 'woods'
    this.passwordComfirmed = 'woodss'
    this.errors = {}
    this.submitting = false
  }

  @action.bound
  onInputChange(key, value) {
    if (this.errors[key])
      delete this.errors[key]

    this[key] = value
  }

  @action.bound
  signUpAsync = flow(function*({
    nickname,
    email,
    password,
    passwordComfirmed
  }) {
    const userData = {
      nickname: nickname,
      email: email,
      password: password,
      passwordComfirmed: passwordComfirmed
    }

    this.submitting = true

    try {
      const {
        data
      } = yield axios.post(API_BASE + 'api/users', userData)

      // console.log(token)
    } catch (e) {
      this.errors = e.response.data
      // console.log(JSON.stringify(e.response.data))
    } finally {
      this.submitting = false
      // console.log('finally')
      return this.errors
    }
  })

}

export default new SignUpInputStore