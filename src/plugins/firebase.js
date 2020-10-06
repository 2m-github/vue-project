import Vue from 'vue'
import firebaseConfig from '@/firebaseConfig.js'
import store from '@/store'
import router from '@/router'

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase.firestore().collection('testBase3').add({testname:'bbb'})
//     .then(res => console.log(res.id))
//     .catch(err => console.log("에러:",err,"============="))

Vue.prototype.$firebase = firebase

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    //console.log('로그인 정보', user)
    store.dispatch('fbUsersAction',user);
    router.push({name:'Home'})
    
  } else {
    // No user is signed in.
    router.push({name:'Login'})
  }
})

