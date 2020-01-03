import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations";
import actions from "./actions";
import getters from './getters'
import modules from './modules'
Vue.use(Vuex)

const state = {
  cartGoods: []
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
  getters
})
