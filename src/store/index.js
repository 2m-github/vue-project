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
    ],
    member:[
      {email:'123@123.com', pwd:'123'},
      {email:'333@333.com', pwd:'333'}
    ],
    loginErr:false
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
    loginSuccess(state){
      state.loginErr = false
    },
    loginFail(state){
      state.loginErr = true
    }
  },
  actions: {
      login({state, commit}, memberObj){
        let selectUser = null;
        state.member.forEach(user => {
            if (user.email === memberObj.email){
                selectUser = user
            }
        })
        if (selectUser !== null) {
            if (selectUser.pwd === memberObj.pwd){
                commit('loginSuccess');
                console.log('로그인 성공')
            }
            else{
                commit('loginFail',)
              
            }
        }
        else{
          commit('loginFail',)
            
        }
      }
    
  },
  modules: {
  }
})
