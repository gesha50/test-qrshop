<template>
  <div class="about">
    <v-btn v-if="!cart.length" @click="goOut">выйти без покупок</v-btn>
    <v-btn v-else @click="goOut">Оплатить и выйти</v-btn>

    <div class="">
      <p>Список товаров:</p>

      <v-container
          class="grey lighten-5 mb-6"
      >
        <v-row
            align="center"
            no-gutters
            style="height: 150px;"
        >
          <v-col
              v-for="(item, i) in items"
              :key="i"
          >
            <v-card
                class="pa-2"
                outlined
                tile
            >
              {{ item.title}}
              <div class="">
                цена
                {{item.price}}
              </div>
              <v-btn @click="buy(item)" >в корзину</v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
<div class="">
  В корзине : {{ cart.length}}
  <div v-for="(item, ind) in cart" :key="ind">
    {{item.title}}
    <p>количество:</p> <v-btn @click="dec(item)" >-</v-btn>{{item.count}} <v-btn @click="inc(item)" >+</v-btn>
    <v-btn @click="deleteItem(item)" >x</v-btn>
    {{item.price * item.count}}
  </div>
  <div v-show="total">Итого: {{total}}</div>
</div>
  </div>
</template>

<script>

export default {
  name: 'About',

  computed: {
    items() {
      return this.$store.getters.items
    },
    cart () {
      return this.$store.getters.cart
    },
    total() {
      let totall = 0
      this.cart.forEach(item => {
        totall = totall + item.price * item.count
      })
      return totall
    }
  },
  created() {
    this.goIn()
  },
  methods: {
    goIn() {
      this.$socket.emit('goInShop', 'data', dataFromServer =>{
        console.log(dataFromServer)
      })
    },
    deleteItem(product) {
      this.$socket.emit('delete', product, dataFromServer =>{
        console.log(dataFromServer)
      })
    },
    goOut() {
      this.$socket.emit('goOutShop', 'data', dataFromServer =>{
        console.log(dataFromServer)
      })
      this.$router.push('/')
    },
    buy(product) {
      this.$socket.emit('buyProduct', product, dataFromServer =>{
        console.log(dataFromServer)
      })
    },
    dec(product) {
      if (product.count === 1) {
        this.deleteItem(product)
      } else {
        this.$socket.emit('dec', product, dataFromServer =>{
          console.log(dataFromServer)
        })
      }
    },
    inc(product) {
      this.$socket.emit('inc', product, dataFromServer =>{
        console.log(dataFromServer)
      })
    },
  },
  sockets: {
    connect: function () {
      this.goIn()
      console.log('socket connected')
    },
    disconnect() {
      this.goOut()
      console.log('socket disconnected')
    },
  },
}
</script>
