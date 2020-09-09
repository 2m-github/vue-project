import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers:[
      {name:'이름 1', msg:'내용 1'},
      {name:'이름 2', msg:'내용 2'},
      {name:'이름 3', msg:'내용 3'}
    ]
  },
  getters:{
    allUsersCount(state){
      return state.allUsers.length
    },
    countMsg(state){
      let count = 0
      state.allUsers.forEach(user => {
        if (user.msg == '123')
        {
          count++
        }
      })
      return count
    }
  },
  mutations: {
    //this.state.allUsers.push(user)
    
  },
  actions: {
  },
  modules: {
  }
})
