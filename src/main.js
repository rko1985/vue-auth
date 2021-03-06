import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Vuelidate from 'vuelidate'

import router from './router'
import store from './store'

Vue.use(Vuelidate)

axios.defaults.baseURL = 'https://vueaxiosproject-4b90c.firebaseio.com';
// axios.defaults.headers.common['Authorization'] = 'fasdfasdf';
axios.defaults.headers.get['Accepts'] = 'application/json';

const requestInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config)
  return config
})

const responseInterceptor =axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res)
  return res
})

axios.interceptors.request.eject(requestInterceptor)
axios.interceptors.request.eject(responseInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
