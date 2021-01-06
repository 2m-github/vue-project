import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import './plugins/firebase';
import vueHead from 'vue-head';
import VueHM from 'vue-hammerjs'
 
Vue.use(VueHM)
Vue.use(vueHead)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  // beforeCreate(){
  //   let token = localStorage.getItem('loginToken')
  //   if(token !== null) {
  //     store.dispatch('getUserInfo')
  //   }
  // },
  render: h => h(App)
}).$mount('#app')
