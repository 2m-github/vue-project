<template>
  <v-container>
    <h1>{{ allUsersCount }}</h1>
    <h1>{{ countMsg }}</h1>
    <div 
      v-for="(user,i) in $store.state.allUsers"
      :key="i"
    >
      {{ user.name }} {{user.msg}}
    </div>

    <v-row>
        <v-col cols="12" >
          <v-text-field label="name" v-model="name"></v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" >
          <v-textarea
            outlined
            name="input-7-4"
            label="msg"
            value=""
            v-model="msg"
          ></v-textarea>
        </v-col>
    </v-row>
    <v-btn class="purple" @click="append">추가</v-btn>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    name: 'HelloWorld',
    data(){
      return {
        name: null,
        msg: null
      }
    },
    computed: {
      // getters 함수명을  그대로 받아서 사용할수 있음
      //...mapGetters(['allUsersCount','countMsg'])

      // getters 함수를 변수에 넣어서 사용할수 있음
      ...mapGetters({
        count : 'allUsersCount',
        msgcount: 'countMsg'
      })
    },
    methods:{
      append(){
          let userObj = {
            name:this.name,
            msg:this.msg
          }
          this.$store.state.allUsers.push(userObj)
          
      }
    }

    
     
  }
</script>
