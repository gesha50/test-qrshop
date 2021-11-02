import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isUserInside: false,
    cart: [],
    items: [
      {
        id: 1,
        title: 'Витамины',
        price: 3000,
        count: 0,
      },
      {
        id: 2,
        title: 'Грибы',
        price: 1000,
        count: 0,
      },
      {
        id: 3,
        title: 'Сыр',
        price: 1500,
        count: 0,
      },
      {
        id: 4,
        title: 'Бекон',
        price: 500,
        count: 0,
      },
      {
        id: 5,
        title: 'Яйцо',
        price: 100,
        count: 0,
      },
      {
        id: 6,
        title: 'Курица',
        price: 1000,
        count: 0,
      },
    ],
  },
  getters: {
    isUserInside: state => state.isUserInside,
    cart: state => state.cart,
    items: state => state.items,
  },
  mutations: {
    SOCKET_welcomeToShop(state) {
      console.log('in')
      state.isUserInside = true
    },
    SOCKET_goOutShop(state) {
      state.isUserInside = false
      state.cart = []
    },
    SOCKET_buyProduct(state, product) {
      console.log(product)
      let isProductInCart = false
      for (let i=0; i <state.cart.length;i++){
        if (state.cart[i].id === product.id) {
          isProductInCart = true
        }
      }
      if (!isProductInCart) {
        product.count++
        state.cart.push(product)
      }
    },
    SOCKET_inc(state, product) {
      for (let i=0; i <state.cart.length;i++){
        if (state.cart[i].id === product.id) {
          state.cart[i].count++
        }
      }
    },
    SOCKET_dec(state, product) {
      for (let i=0; i <state.cart.length;i++){
        if (state.cart[i].id === product.id) {
          state.cart[i].count--
        }
      }
    },

    SOCKET_delete(state, product) {
      if (state.cart.length === 1) {
        state.cart = []
      } else {
        state.cart = state.cart.filter(el=>el.id !== product.id)
      }
    },

  },
  actions: {
  },
  modules: {
  }
})
