/* eslint-disable */
// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import FastClick from 'fastclick'
// import VueRouter from 'vue-router'
// import Vuex from 'vuex'
// import App from './App'

// import Home from './components/Home'
// import PlanManagement from './components/PlanManagement.vue'
// import Message from './components/Message.vue'
// import ProductionManagement from './components/ProductionManagement.vue'
// import ProgressManagement from './components/ProgressManagement.vue'
// import DataManagement from './components/DataManagement.vue'

// Vue.use(VueRouter)
// Vue.use(Vuex)
// const routes = [
  // {
  //   path: '/',
  //   component: Home
  // }, {
  //   path: '/PlanManagement',
  //   component: PlanManagement
  // }, {
  //   path: '/Message',
  //   component: Message
  // }, {
  //   path: '/ProductionManagement',
  //   component: ProductionManagement
  // },
  // //  {   path: '/DataManagement',   component: DataManagement },
  // {
  //   path: '/ProgressManagement',
  //   component: ProgressManagement
  // }
// ]

// const router = new VueRouter({routes})

// FastClick.attach(document.body)

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app-box')

import objectAssign from 'object-assign'

import Vue from 'vue'

import App from './App'

import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import axios from 'axios'
import { DatetimePlugin, CloseDialogsPlugin, ConfigPlugin, BusPlugin, LocalePlugin, DevicePlugin, ToastPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin, WechatPlugin, AjaxPlugin, AppPlugin } from 'vux'
import Work from './components/Work'
import PlanManagement from './components/PlanManagement.vue'
import Message from './components/Message.vue'
import ProductionManagement from './components/ProductionManagement.vue'
import ProgressManagement from './components/ProgressManagement.vue'
Vue.use(VueRouter)
Vue.use(Vuex)

Vue.prototype.$axios = axios
require('es6-promise').polyfill()

/** i18n **/
let store = new Vuex.Store({
  modules: {
    i18n: vuexI18n.store
  }
})

// Vue.use(vuexI18n.plugin, store)
Vue.use(vuexI18n.plugin, store)

// const vuxLocales = require('json-loader!yaml-loader!./locales/all.yml')
// const componentsLocales = require('json-loader!yaml-loader!./locales/components.yml')

// const finalLocales = {
//   'en': objectAssign(vuxLocales['en'], componentsLocales['en']),
//   'zh-CN': objectAssign(vuxLocales['zh-CN'], componentsLocales['zh-CN'])
// }

// for (let i in finalLocales) {
//   Vue.i18n.add(i, finalLocales[i])
// }


// Vue.use(LocalePlugin)
// const nowLocale = Vue.locale.get()
// if (/zh/.test(nowLocale)) {
//   Vue.i18n.set('zh-CN')
// } else {
//   Vue.i18n.set('en')
// }

store.registerModule('vux', {
  state: {
    demoScrollTop: 0,
    isLoading: false,
    direction: 'forward'
  },
  mutations: {
    updateDemoPosition (state, payload) {
      state.demoScrollTop = payload.top
    },
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateDirection (state, payload) {
      state.direction = payload.direction
    }
  },
  actions: {
    updateDemoPosition ({commit}, top) {
      commit({type: 'updateDemoPosition', top: top})
    }
  }
})

// global VUX config
Vue.use(ConfigPlugin, {
  $layout: 'VIEW_BOX' // global config for VUX, since v2.5.12
})

// plugins
Vue.use(DevicePlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(BusPlugin)
Vue.use(DatetimePlugin)

// test
if (process.env.platform === 'app') {
  Vue.use(AppPlugin, store)
}

const FastClick = require('fastclick')
FastClick.attach(document.body)

// The following line will be replaced with by vux-loader with routes in ./demo_list.json
const routes = [
  {
    path: '/',
    component: Work
  }, {
    path: '/PlanManagement',
    component: PlanManagement
  }, {
    path: '/Message',
    component: Message
  }, {
    path: '/ProductionManagement',
    component: ProductionManagement
  },
  //  {   path: '/DataManagement',   component: DataManagement },
  {
    path: '/ProgressManagement',
    component: ProgressManagement
  }
]

const router = new VueRouter({
  routes
})

Vue.use(CloseDialogsPlugin, router)

sync(store, router)

// simple history management
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
let isPush = false
let endTime = Date.now()
let methods = ['push', 'go', 'replace', 'forward', 'back']

document.addEventListener('touchend', () => {
  endTime = Date.now()
})
methods.forEach(key => {
  let method = router[key].bind(router)
  router[key] = function (...args) {
    isPush = true
    method.apply(null, args)
  }
})

router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})

  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', {direction: 'forward'})
    } else {
      // 判断是否是ios左滑返回
      if (!isPush && (Date.now() - endTime) < 377) {
        store.commit('updateDirection', {direction: ''})
      } else {
        store.commit('updateDirection', { direction: 'reverse' })
      }
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirection', {direction: 'forward'})
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
})

router.afterEach(function (to) {
  isPush = false
  store.commit('updateLoadingStatus', {isLoading: false})
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
