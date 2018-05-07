import axios from 'axios'
import {
  AsyncStorage
} from 'react-native'

const setAuthToken = async token => {
  if (token) {
    // Apply to every request
    await AsyncStorage.setItem('jwtToken', token)
    axios.defaults.headers.common['Authorization'] = token
    return token

  } else {
    // Delete auth header
    await AsyncStorage.removeItem('jwtToken')
    token = axios.defaults.headers.common['Authorization']

    delete axios.defaults.headers.common['Authorization']
    return token
  }
}

export default setAuthToken