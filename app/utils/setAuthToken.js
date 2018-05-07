import axios from 'axios'
import {
  AsyncStorage
} from 'react-native'

const setAuthToken = token => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common['Authorization'] = token
    return token

  } else {
    // Delete auth header
    token = axios.defaults.headers.common['Authorization']

    delete axios.defaults.headers.common['Authorization']
    return token
  }
}

export default setAuthToken