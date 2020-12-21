


<template>
  <div>
    <template>
  <v-card
    class="mx-auto"
    width="256"
    tile
  >
    <v-navigation-drawer permanent>
      <v-system-bar></v-system-bar>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              John Leider
            </v-list-item-title>
            <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<v-system-bar></v-system-bar>
    <test>
      <template v-slot:header="props">
        <span>부모 header {{ props.names }}</span>
      </template>
      <template v-slot:body>
        <span>부모 body </span>
      </template>
      <template v-slot:footer>
        <span>부모 footer </span>
      </template>
      <template v-slot:default>
        <p>default content</p>
        <v-btn @click="loadLink('https://www.naver.com/')">링크</v-btn>
      </template>
    </test>
    
  </div>
</template>
  

<script>

import Test from './Test.vue';
import {common} from '@/mixin'
export default {
  mixins:[
    common
  ],
  components:{
    Test
  },
  data(){
    return {
      value:1,
      persons: {name:'lee',age:'20'},
      ex4:null,
      selectedItem:0,
      items: [
        { text: 'My Files', icon: 'mdi-folder' },
        { text: 'Shared with me', icon: 'mdi-account-multiple' },
        { text: 'Starred', icon: 'mdi-star' },
        { text: 'Recent', icon: 'mdi-history' },
        { text: 'Offline', icon: 'mdi-check-circle' },
        { text: 'Uploads', icon: 'mdi-upload' },
        { text: 'Backups', icon: 'mdi-cloud-upload' },
      ],
      texts: {
        ['111']:`1111111111`,
        ['222']:`2222222222`,
        ['333']:`3333333333`,
      }
    }
  },
  methods:{
    
    testfun(){
      let persons2 = this.persons;
      let persons3 = persons2;
      persons3.sex = 'M';
      console.log('persons',this.persons)
      for (const key in persons2) {
        if (persons2.hasOwnProperty(key)) {
          persons3.name = 'sun';
          console.log('true', persons2[key], this.persons.sex,)
          
        }
        else
        {
          console.log('false',persons2)
        }
      }
      const uri = 'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E8%8B%B9%E6%9E%9C11%E6%9C%8811%E6%97%A5%E5%86%8D%E5%BC%80%E5%8F%91%E5%B8%83%E4%BC%9A&rsv_idx=2&rsv_dl=fyb_n_homepage&hisfilter=1'
      const enc = encodeURI(uri)
      console.log(enc)
      const dec = decodeURI(uri)
      console.log(dec)
      
      function getThisBinding(){
        return this;
      }

      const thisArg = { a : 1 }
      console.log(getThisBinding.call(this.persons))
      console.log(getThisBinding.apply(thisArg))
      console.log(this.value)
      

    },
    showList(num){
      return {
        '오':'fffff',
        '이':'ddddd',
        '유':'ccccc'
      }[num]
    }
  },
  mounted(){
    console.log('texts========',this.texts['222'])
    console.log(this.showList('유'))
    this.testfun();
    console.log('query',this.$route.query.name);
    
    const obj = {
      
      async foo(){
        console.log("timeout==0000")
        await setTimeout(()=>{
          
          console.log("timeout==")
        },100)
      }
    }
    //obj.foo();
    function wait(){
      return new Promise((resolve, reject) =>{
      setTimeout(function(){
        
        resolve('done!')
      },3000)
      })
    }
    async function foo2(){
      console.log("timeout==[s]")
      wait().then(e =>{
        console.log(e);
      });
      console.log("timeout==[E]")
    }
    const re = foo2()
    
  }
}
</script>




<style scoped>
.wheel-wrapper {
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.wheel-pointer {
  width: 60px;
  height: 60px;
  border-radius: 1000px;
  background: yellow;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 60px;
  z-index: 10;
  cursor: pointer;

  
}
.wheel-pointer:after {
    content: "";
    position: absolute;
    top: -32px;
    left: 50%;
    border-width: 0 8px 40px;
    border-style: solid;
    border-color: transparent transparent yellow;
    transform: translateX(-50%);
  }
.wheel-bg {
  width: 100%;
  height: 100%;
  border-radius: 1000px;
  overflow: hidden;
  transition: transform 4s ease-in-out;
  background: #7eef97;

  
}
.wheel-bg.freeze {
    transition: none;
    background: red;
  }

.prize-list {
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
}

.prize-item-wrapper {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  border:1px solid #000;

}

.prize-item {
  width: 100%;
  height: 100%;
  transform-origin: bottom;

  

  
}
.prize-item .prize-name {
    padding: 16px 0;
  }

</style>