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
    fbEmail:null,
    loginErr:false,
    loginSuccess:false,
    confirmDialog:null
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
      state.fbEmail = user.email;
      state.loginSuccess = true
    },
    setConfirmDialog(state,data){
      state.confirmDialog = data
    }
  },
  // actions
  actions: {
    fbUsersAction({commit},user){
      console.log('실행');
      commit('setFbUser',user)
    },
    setConfirmDialogAction({commit}, data){
      commit('setConfirmDialog',data)
    }
  },
  // modules
  modules: {
  }
})
