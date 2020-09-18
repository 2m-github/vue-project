import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import mixin from '@/mixin/cookieMixin.js'
import router from '@/router' 
Vue.use(Vuex)

export default new Vuex.Store({
  //state
  state: {
    fbName:'meiyou',
    fbPhoto:null,
    loginErr:false,
    loginSuccess:false
  },
  //getters
  getters:{
    
  },
  //mutations
  mutations: {
    setFbUser(state,user){
      console.log('mutations');
      state.fbName = user.displayName;
      state.fbPhoto = user.photoURL;
    }
    
  },
  // actions
  actions: {
    fbUsersAction({commit},user){
      console.log('실행',user);
      commit('setFbUser',user)
    }
  },
  // modules
  modules: {
  }
})
