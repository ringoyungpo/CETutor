import {
  types
} from 'mobx-state-tree'

import {
  computed,
  action,
  observable
} from 'mobx'

class SignInInputStore {
  @observable email
  @observable password
  @observable errors

  constructor() {
    this.email = ''
    this.password = ''
    this.errors = {}
  }

  @action.bound
  onInputChange(key, value) {
    this[key] = value
  }

}

export default new SignInInputStore