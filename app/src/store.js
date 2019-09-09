import Vue from 'vue'
import Vuex from 'vuex'

import { COUNT_PRODUCTS, COUNT_ITEMS, SET_QUANTITY } from './store-properties'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    itemsInCart: {}
  },

  mutations: {
    [SET_QUANTITY] (state, {productId, quantity}) {
      if (quantity > 0) {
        Vue.set(state.itemsInCart, productId, quantity)
      } else {
        Vue.delete(state.itemsInCart, productId)
      }
    }
  },

  getters: {
    [COUNT_PRODUCTS] (state) {
      return Object.keys(state.itemsInCart).length
    },
    [COUNT_ITEMS] (state) {
      return Object.values(state.itemsInCart).reduce(
        (accumulated, current) => accumulated + current,
        0
      )
    }
  }

})
