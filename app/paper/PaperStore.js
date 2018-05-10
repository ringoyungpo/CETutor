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
import _ from 'lodash'


configure({
  enforceActions: true
})

class PaperStore {
  @observable paper
  @observable downloading
  @observable partSelected
  @observable sectionSelected
  @observable audioPlaying
  @observable sound



  constructor() {
    this.paper = {}
    this.downloading = false
    this.partSelected = PAPER_HEADER
    this.sectionSelected = null
    this.audioPlaying = false
    this.sound = null
    Sound.setCategory('Playback')
  }

  @action.bound
  UnmountPaperScreen() {
    this.paper = {}
    this.downloading = false
    this.partSelected = PAPER_HEADER
    this.sectionSelected = null
    this.audioPlaying = false
    this.sound = null
  }

  @action.bound
  partSelect(part) {
    if (this.partSelected === part)
      this.partSelected = null
    else
      this.partSelected = part

    this.sectionSelected = null
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
    const [listening, sections, sectionIndex, modules, moduleIndex, moduleSoundOrQuestions, questionIndex, questionSound] = key.split('.')

    const callback = (error) => {
      if (error) {
        alert(error.message)
        return
      }

      this.sound.play(() => {
        this.sound.release()

        runInAction(() => {
          this.audioPlaying = false
          if (questionSound) this.paper[listening][sections][sectionIndex][modules][moduleIndex][moduleSoundOrQuestions][questionIndex][questionSound].playing = false
          else this.paper[listening][sections][sectionIndex][modules][moduleIndex][moduleSoundOrQuestions].playing = false
          if (mode === TEST) {
            if (questionSound) this.paper[listening][sections][sectionIndex][modules][moduleIndex][moduleSoundOrQuestions][questionIndex][questionSound].played = true
            else this.paper[listening][sections][sectionIndex][modules][moduleIndex][moduleSoundOrQuestions].played = true

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
      if (questionSound) this.paper[listening][sections][sectionIndex][modules][moduleIndex][moduleSoundOrQuestions][questionIndex][questionSound].playing = true
      else this.paper[listening][sections][sectionIndex][modules][moduleIndex][moduleSoundOrQuestions].playing = true
    })
  }

  @action.bound
  onInputChange(key, value) {
    const [part, eassyOrSections, sectionIndexOrName, modulesOrbankedClozing, moduleIndex, questions, questionIndex, optionSelected] = key.split('.')
    if (part === 'listening' && optionSelected) {
      let temp = this.paper[part][eassyOrSections][sectionIndexOrName][modulesOrbankedClozing][moduleIndex][questions][questionIndex][optionSelected]
      temp = temp === value ? null : value
      this.paper[part][eassyOrSections][sectionIndexOrName][modulesOrbankedClozing][moduleIndex][questions][questionIndex][optionSelected] = temp
      this.paper = { ...this.paper
      }
    } else if (eassyOrSections && (part === 'writing' || part === 'translation')) {
      this.paper[part][eassyOrSections] = value
    } else if (part === 'reading') {
      if (modulesOrbankedClozing === 'orderSelected') {
        this.paper[part][eassyOrSections][sectionIndexOrName][modulesOrbankedClozing][moduleIndex] = value
        this.paper[part][eassyOrSections][sectionIndexOrName].bankedClozing = null
        // console.log(this.paper[part][eassyOrSections][sectionIndexOrName][modulesOrbankedClozing])
      } else {
        this.paper[part][eassyOrSections][sectionIndexOrName][modulesOrbankedClozing] = value
      }
      this.paper = { ...this.paper
      }
    }
    //  else {
    //   this.paper[part] = value
    // }
  }

  @action.bound
  InitAsync = flow(function*(_id) {
    this.downloading = true

    try {
      let {
        data
      } = yield axios.get(API_BASE + 'api/papers/' + _id)

      console.log(data)
      data.reading.sections.bankedCloze.orderSelected = [null, null, null, null, null, null, null, null, null, null]
      this.paper = data
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