import {
  types
} from 'mobx-state-tree'

const SignInInput = types
  .model('SignInInput', {
    email: types.string,
    password: types.string
  })
  .actions(self => ({
    onInputChange(key, value) {
      self[key] = value
    }
  }))
  .create({
    email: '',
    password: ''
  })

export default SignInInput