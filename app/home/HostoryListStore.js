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

class HostoryListStore {
  @observable historyList
  @observable downloading

  constructor() {
    this.historyList = []
    this.downloading = false

  }

  @action.bound
  InitAsync = flow(function*() {
    this.downloading = true

    try {
      const {
        data
      } = yield axios.get(API_BASE + 'api/answers/token')

      this.historyList = data
    } catch (e) {
      this.errors = e.response.data
      // console.log(JSON.stringify(e.response.data))
    } finally {
      this.downloading = false
      // console.log('finally')
      return this.historyList
    }
  })

  deleteAsync = flow(function*(_id) {
    const apiPath = 'api/answers/'
    try {
      yield axios.delete(API_BASE + apiPath + _id)
    } catch (e) {
      console.log(e)
    }
  })
}

export default new HostoryListStore