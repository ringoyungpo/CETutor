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

class PaperList {
  @observable paperList
  @observable downloading

  constructor() {
    this.paperList = []
    this.downloading = false

  }

  @action.bound
  InitAsync = flow(function*() {
    this.downloading = true

    try {
      const {
        data
      } = yield axios.get(API_BASE + 'api/papers')

      this.paperList = data
    } catch (e) {
      this.errors = e.response.data
      // console.log(JSON.stringify(e.response.data))
    } finally {
      this.downloading = false
      // console.log('finally')
      return this.paperList
    }
  })
}

export default new PaperList