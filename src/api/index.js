//  https://www.cainiaojc.com/note/qa3ym1.html

import axios from 'axios' // 引入axios
import qs from 'qs' // 引入qs，用来序列化post类型的数据，否则后端无法接收到数据
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.withCredentials = false// 在跨域请求时，不会携带用户凭证；返回的 response 里也会忽略 cookie

// 创建axios实例，请求超时时间为300秒
const instanceA = axios.create({
  timeout: 300000,
})

const instanceB = axios.create({
  timeout: 300000,
})

// 如果项目为单一域名，这里可以不用进行配置，当项目接口有多个域名时，要对axios实例基础路径进行配置，否则在项目生产环境中无法进行区别调用
if (process.env.NODE_ENV === 'development')
  instanceB.defaults.baseURL = 'http://172.21.148.40:7777'

if (process.env.NODE_ENV === 'production')
  instanceA.defaults.baseURL = 'http://127.0.0.1/'

// 请求和响应拦截可以根据实际项目需求进行编写
// 请求发起前拦截
instanceA.interceptors.request.use((config) => {
  // 这里可以对接口请求头进行操作 如：config.headers['X-Token'] = token
  NProgress.start()
  return config
}, (error) => {
  return Promise.reject(error)
})
instanceB.interceptors.request.use((config) => {
  NProgress.start()
  const token = sessionStorage.getItem('token2')
  if (token)
    config.headers.token = token

  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截（请求返回后拦截）
instanceA.interceptors.response.use((response) => {
  NProgress.done()
  return response
}, (error) => {
  return Promise.reject(error)
})
instanceB.interceptors.response.use((response) => {
  NProgress.done()
  return response
}, (error) => {
  return Promise.reject(error)
})

// 按照请求类型对axios进行封装
const api = {
  get(url, data) {
    return instanceA.get(url, { params: data })
  },
  post(url, data) {
    return instanceA.post(url, qs.stringify(data))
  },

  // 与后端交互使用 instanceB
  doGet(url, data) {
    return instanceB.get(url, { params: data })
  },

  doLogin(url, data) {
    return instanceB.post(url, data)
  },
  doPost(url, data) {
    return instanceB.post(url, qs.stringify(data))
  },
}
export default api

