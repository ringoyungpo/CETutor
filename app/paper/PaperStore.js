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
  configure,
  runInAction
} from 'mobx'

import {
  PAPER_HEADER,
  WRITING,
  LISTENING,
  READING,
  TRANSLATION,
  TEST
} from '../../constant/paperConst'
// import Sound from 'react-native-sound'
import Sound from 'react-native-sound'


configure({
  enforceActions: true
})

class PaperStore {
  @observable paper
  @observable answerSheet
  @observable downloading
  @observable partSelected
  @observable sectionSelected
  @observable audioPlaying
  @observable sound



  constructor() {
    this.paper = {}
    this.answerSheet = {}
    this.downloading = false
    this.partSelected = PAPER_HEADER
    this.sectionSelected = null
    this.audioPlaying = false
    this.sound = false
    Sound.setCategory('Playback')
  }

  @action.bound
  partSelect(part) {
    if (this.partSelected === part)
      this.partSelected = null
    else
      this.partSelected = part
  }

  @action.bound
  sectionSelect(section) {
    if (this.sectionSelected === section)
      this.sectionSelected = null
    else
      this.sectionSelected = section
  }

  @action.bound
  playAudio(url, mode, key) {
    const [listening, sections, sectionIndex, modules, moduleIndex, moduleSound] = key.split('.')

    const callback = (error) => {
      if (error) {
        alert(error.message)
        return
      }

      this.sound.play(() => {
        this.sound.release()

        runInAction(() => {
          this.audioPlaying = false
          this.paper[listening][sections][sectionIndex][modules][moduleIndex][moduleSound].playing = false
          if (mode === TEST) {
            this.paper[listening][sections][sectionIndex][modules][moduleIndex][moduleSound].played = true
            this.sound = undefined
          }
        })


      })
    }

    runInAction(() => {
      this.sound = new Sound(
        url,
        undefined,
        error => callback(error)
      )
      this.audioPlaying = true
      this.paper[listening][sections][sectionIndex][modules][moduleIndex][moduleSound].playing = true

    })


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
      console.log(data)
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