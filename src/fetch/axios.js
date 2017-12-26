import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = 'http://localhost:3000/'

axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
    console.log('1')
  }
  console.log('config.data:' + config.data)
  return config
}, (error) => {
  Message({
    showClose: true,
    message: error,
    type: 'error.data.error.message'
  })
  return Promise.reject(error)
})

axios.interceptors.response.use((res) => {
  console.log('2:')
  if (!res.data) {
    return Promise.reject(res)
  }
  return res
}, (error) => {
  return Promise.reject(error)
})

export function fetch (url, params) {
  console.log('3')
  return new Promise((resolve, reject) => {
    axios.post(url, params)
        .then(response => {
          // const result = response.data
          resolve(response.data)
          console.log('6:')
        }, err => {
          reject(err)
        })
        .catch((error) => {
          reject(error)
        })
  })
  .catch((reason) => {
    console.log(reason)
  })
}

export default {
  Login (params) {
    return fetch('/api/user/addUser', params)
  },
  showFoodList () {
    return fetch('/api/food/foodList', null)
  },
  showFoodPopList () {
    return fetch('/api/food/foodPopList', null)
  },
  showQuestList () {
    return fetch('/api/quest/questList', null)
  },
  showSearchList () {
    return fetch('/api/search/searchList', null)
  },
  showFoodNewList () {
    return fetch('/api/food/foodNewList', null)
  },
  showProvinceList () {
    return fetch('/api/dire/provinceList', null)
  },
  showCityList (params) {
    return fetch('/api/dire/cityList', params)
  },
  showCountyList (params) {
    return fetch('/api/dire/countyList', params)
  },
  submitEditPerson (params) {
    return fetch('/api/user/editPerson', params)
  },
  getPersonInfo (params) {
    return fetch('/api/user/getPersonInfo', params)
  }
}
