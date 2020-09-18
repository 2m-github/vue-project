<template>
  <div class="home">
    
    
    <v-row>
        <v-col cols="12" >
          <v-textarea
            outlined
            name="input-7-4"
            label="msg"
            value=""
            v-model="comment"
          ></v-textarea>
        </v-col>
    </v-row>
    <v-btn class="purple" @click="push">추가</v-btn>
    
    <!-- <ul>
      <li
        v-for="(item, index) in info"
        :key="index"
      >
        
         {{ item.comment}} 
        <v-btn @click="updateInfo(item.id)">수정</v-btn>
        <v-btn @click="del(item.id)">삭제</v-btn>
      </li>
    </ul> -->
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-list two-line>
            <template v-for="(item, index) in info">
              <v-divider
                :key="item.id"
                inset
              ></v-divider>
              <v-list-item :key="index">
                <v-list-item-avatar>
                  <img :src="fbPhoto">
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title >==={{ fbName }}===</v-list-item-title>
                  {{ item.comment}}
                </v-list-item-content>
                <v-btn @click="updateInfo(item.id)">수정</v-btn>
                <v-btn @click="del(item.id)">삭제</v-btn>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapState } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
      comment:null,
      info:[],
      count:0
    }
  },
  computed:{
    ...mapState(['fbName','fbPhoto','fbEmail'])
  },
  methods: {
    
    async push(){
      let r = await this.$firebase.firestore().collection('comments').add({
        name : this.fbName,
        comment : this.comment,
        email : this.fbEmail,
      })
      //this.info.push({title:this.name, content:this.msg})
      this.count++
      this.readInfo();
    },
    async readInfo(){
      let snapshot = await this.$firebase.firestore().collection('comments').get().catch(err => console.log("err==========", err))
      this.info = []
      console.log("snapshot=",snapshot)
      if (snapshot != null || snapshot != undefined){
        snapshot.forEach(element => {
          
          //this.info.push = element.data()
          let {comment} = element.data()
          console.log(element.data())
          this.info.push({comment, id:element.id})
        });
      }
      else{
        alert('로그인하면 내용을 볼수있음')
      }
    },
    async updateInfo(id){
      
      let r = await this.$firebase.firestore().collection('comments').doc(id).set({
        
        comment:this.comment
      })
      await this.readInfo();
    },
    async del(id) {
      await this.$firebase.firestore().collection('comments').doc(id).delete()
      await this.readInfo();
    }
  },
  
  mounted() {
    this.readInfo()
  }
}
</script>
