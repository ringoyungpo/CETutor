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

import {
  PAPER_HEADER,
  WRITING,
  LISTENING,
  READING,
  TRANSLATION
} from '../../constant/paperConst'

configure({
  enforceActions: true
})

class PaperStore {
  @observable paper
  @observable answerSheet
  @observable downloading
  @observable partSelected

  constructor() {
    this.paper = {}
    this.answerSheet = {}
    this.downloading = false
    this.partSelected = PAPER_HEADER
  }

  @action.bound
  partSelect(part) {
    if (this.partSelected === part)
      this.partSelected = null
    else
      this.partSelected = part
  }

  @action.bound
  onInputChange(key, value) {
    const [part, words] = key.split('.')
    if (words) {
      this.answerSheet[part] = this[part] || {}
      this.answerSheet[part][words] = value
    } else {
      this.answerSheet[part] = value
    }
  }

  @action.bound
  InitAsync = flow(function*(_id) {
    this.downloading = true

    try {
      const {
        data
      } = yield axios.get(API_BASE + 'api/papers/' + _id)

      this.paper = data
      this.answerSheet = {}
    } catch (e) {
      console.log(e)
      // this.errors = e.response.data
      // console.log(JSON.stringify(e.response.data))
    } finally {
      this.downloading = false
      // console.log('finally')
      return this.paper
    }
  })
}

export default new PaperStore