<template>
  <v-app>
    <v-container fluid fill-height id="login-page">
      <v-layout align-center justify-center>
        <v-flex :style="{ 'max-width': '350px' }">
          <v-card>
            <v-card-text>
              <div class="text-center mb-4">
                <img src="../assets/logo.png" width="80" height="80" />
              </div>
              <transition name="fade" mode="out-in">
                <div class="home">
                  <v-form ref="form" @submit.prevent="validate">

                    <div class="text-center">
                      <v-btn
                          @click="goHome"
                          color="primary"
                          large
                          type="submit"
                          text
                          rounded
                      >
                        войти в магазин
                      </v-btn>
                    </div>
                  </v-form>
                </div>
              </transition>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      form: {
        username: null,
        password: null,
      },
      errorMessages: {},
      loading: false,
    };
  },
  methods: {
    goHome() {
      this.$router.push('/about')
    },
    validate() {
      console.log('ok')
    },
  },
}
</script>
