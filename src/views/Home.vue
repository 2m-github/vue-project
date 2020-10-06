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
    <v-dialog v-model="dialog">

      <v-card>
        <v-card-title class="headline">
          Use Google's location service?
        </v-card-title>
        <v-card-text>
          추가완료
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              확인
            </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <img src="assets/images/clip.png" width="300" alt=""/>
<input type="file" accept="image/*" capture="camera">
<input type="file" accept="video/*" capture="camcorder">
<input type="file" accept="audio/*" capture="microphone">

    <v-row v-if="$store.state.loginSuccess">
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card flat>
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
    <div v-if="$store.state.loginSuccess == false">
      <div v-html="msgNo"></div>
    </div>

    <v-tabs
      background-color="cyan"
      dark
      next-icon="mdi-arrow-right-bold-box-outline"
      prev-icon="mdi-arrow-left-bold-box-outline"
      show-arrows
    >
      <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tab
        v-for="i in 30"
        :key="i"
        :href="'#tab-' + i"
      >
        Item {{ i }}
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapState } from 'vuex'
export default {
  name: 'Home',
  head: {
    title: {
      inner: '레이아웃'
    },
    // Meta tags
    meta: [
      { name: 'keywords', content: '레이아웃' },
      { property:'og:type', content:'image/jpeg'},
      { property:'og:title', content:'공유페이지 타이틀'},
      { property:'og:url', content:'https://www.naver.com'},
      { property:'og:description', content:'공유'},
      { property:'og:image', content:'공유이미지 경로'}
    ]
  },
  data() {
    return {
      comment:null,
      info:[],
      count:0,
      msgNo:'',
      dialog: false
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
      this.dialog = true
    },
    async readInfo(){
      let snapshot = await this.$firebase.firestore().collection('comments').get().catch(err => console.log("err==========", err))
      this.info = []
      console.log("snapshot=",snapshot)
      if (snapshot != null || snapshot != undefined){
        snapshot.forEach(element => {
          
          //this.info.push = element.data()
          console.log("sssss===",element.data())
          let {comment} = element.data()
          //console.log(element.data())
          this.info.push({comment, id:element.id})
        });
      }
      else{
        
        this.msgNo = '<p>로그인하면 내용을 볼수있음</p>'
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
