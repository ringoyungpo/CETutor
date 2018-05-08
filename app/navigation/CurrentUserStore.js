import {
  types
} from 'mobx-state-tree'

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

class CurrentUserStore {
  @observable user

  constructor() {}

  @action.bound
  init(user) {
    this.user = user
  }
}

export default new CurrentUserStore