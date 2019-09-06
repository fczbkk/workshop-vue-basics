import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemsInCart: {
      first: 5
    }
  },
  mutations: {
    setCartItemQuantity (state, {productId, quantity}) {
      if (quantity > 0) {
        Vue.set(state.itemsInCart, productId, quantity)
      } else {
        Vue.delete(state.itemsInCart, productId)
      }
    }
  },
  actions: {

  },
  getters: {
    countProducts (state) {
      return Object.keys(state.itemsInCart).length
    },
    countItems (state) {
      return Object.values(state.itemsInCart).reduce(
        (accumulated, current) => current + accumulated,
        0
      )
    }
  }
})
