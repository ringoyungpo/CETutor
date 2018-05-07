import {
  types
} from 'mobx-state-tree'

const SignInInput = types
  .model('SignInInput', {
    nickname: types.string,
    password: types.string
  })
  .actions(self => ({
    onInputChange(key, value) {
      self[key] = value
    }
  }))
  .create({
    nickname: '',
    password: ''
  })

export default SignInInput