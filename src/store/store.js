import Vue from 'vue'
import Vuex from 'vuex'
import * as user from '@/store/modules/user.js'
import * as event from '@/store/modules/event.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    event
  },
  state: {
    categories: ['cat1', 'cat2', 'cat3', 'cat4'],
  }
})
