import axios from 'axios'
import qs from 'qs'
import * as _ from '../util/tool'

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
  _.toast('错误的传参', 'fail')
  return Promise.reject(error)
})

axios.interceptors.response.use((res) => {
  console.log('2:')
  if (!res.data) {
    return Promise.reject(res)
  }
  return res
}, (error) => {
  _.toast('网络异常', 'fail')
  return Promise.reject(error)
})

export function fetch (url, params) {
  console.log('3')
  return new Promise((resolve, reject) => {
    axios.post(url, params)
        .then(response => {
          // const result = response.data
          resolve(response.data)
          // console.log('6:' + result)
        }, err => {
          reject(err)
          console.log('5:')
        })
        .catch((error) => {
          console.log('4' + error)
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
  }
}
