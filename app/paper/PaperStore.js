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
  TEST,
  SUBMITTING
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
  @observable mode
  @observable showAnswerSheet
  @observable submitting


  constructor() {
    this.paper = {}
    this.downloading = false
    this.partSelected = null
    this.sectionSelected = null
    this.audioPlaying = false
    this.sound = null
    this.mode = null
    this.showAnswerSheet = false
    this.submitting = false
    Sound.setCategory('Playback')
  }

  @action.bound
  setMode(mode) {
    if (mode === SUBMITTING) {
      this.showAnswerSheet = true
    }
    this.mode = mode
  }

  @action.bound
  UnmountPaperScreen() {
    this.paper = {}
    this.downloading = false
    this.partSelected = null
    this.sectionSelected = null
    this.audioPlaying = false
    this.sound = null
    this.showAnswerSheet = false
    this.submitting = false
  }

  @action.bound
  toggleAnswerSheet() {
    this.showAnswerSheet = !this.showAnswerSheet
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
    const [partField, ...partChild] = key.split('.')
    switch (partField) {
      case 'writing':
        {
          const [writing, writingField] = [partField, ...partChild]
          this.paper[writing][writingField] = value
        }
        break
      case 'listening':
        {
          const [listening, sections, sectionIndex, modules, moduleIndex, questions, questionIndex, optionSelected] = [partField, ...partChild]
          const oldValue = this.paper[listening][sections][sectionIndex][modules][moduleIndex][questions][questionIndex][optionSelected]
          this.paper[listening][sections][sectionIndex][modules][moduleIndex][questions][questionIndex][optionSelected] = oldValue === value ? (null) : (value)
          // this.paper[listening] = { ...this.paper[listening]
          // }
        }
        break;
      case 'reading':
        {
          const [reading, sections, sectionField, ...sectionChild] = [partField, ...partChild]
          switch (sectionField) {
            case 'bankedCloze':
              {
                const [bankedCloze, bankedClozeField, ...bankedClozeChild] = [sectionField, ...sectionChild]
                switch (bankedClozeField) {
                  case 'orderSelected':
                    {
                      const [orderSelected, orderSelectedIndex] = [bankedClozeField, ...bankedClozeChild]
                      const oldValue = this.paper[reading][sections][bankedCloze][orderSelected][orderSelectedIndex]
                      this.paper[reading][sections][bankedCloze][orderSelected][orderSelectedIndex] = oldValue === value ? (null) : (value)
                      this.paper[reading][sections][bankedCloze].bankedClozing = null
                    }
                    break;
                  case 'bankedClozing':
                    {
                      const [bankedClozing] = [bankedClozeField]
                      this.paper[reading][sections][bankedCloze][bankedClozing] = value
                    }
                    break;
                  default:

                }

              }
              break;
            case 'locating':
              {
                const [locating, questions, questionIndex, optionSelected] = [sectionField, ...sectionChild]
                this.paper[reading][sections][locating][questions][questionIndex][optionSelected] = value

              }
              break;
            case 'selection':
              {
                // reading.sections.selection.passages.passageIndex.questions.questionIndex.optionSelected
                const [selection, passages, passageIndex, questions, questionIndex, optionSelected] = [sectionField, ...sectionChild]
                const oldValue = this.paper[reading][sections][selection][passages][passageIndex][questions][questionIndex][optionSelected]
                this.paper[reading][sections][selection][passages][passageIndex][questions][questionIndex][optionSelected] = oldValue === value ? null : value
              }
              break;
            default:

          }
          // this.paper[reading] = { ...this.paper[reading]
          // }
        }
        break
      case 'translation':
        {
          const [translation, translationField] = [partField, ...partChild]
          this.paper[translation][translationField] = value
        }
        break
      default:

    }
    this.paper = { ...this.paper
    }

  }

  @action.bound
  InitAsync = flow(function*(_id) {
    this.downloading = true

    try {
      let {
        data
      } = yield axios.get(API_BASE + 'api/papers/' + _id)

      // console.log(data)
      // data.writing.eassy = ''
      // data.translation.answer = ''
      data.reading.sections.bankedCloze.orderSelected = [null, null, null, null, null, null, null, null, null, null]
      // console.log(data)

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


  @action.bound
  submitAsync = flow(function*() {
    this.submitting = true

    try {
      // let response = yield axios.post(API_BASE + 'api/answers/', this.paper)
      console.log(this.paper)
    } catch (e) {
      console.log(e)
    } finally {
      this.submitting = false
    }
  })
}

export default new PaperStore