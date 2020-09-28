import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'



Vue.use(VueRouter)

function load(component) {
  return () => import(/* webpackChunkName: "request" */ `../views/${component}.vue`)
}

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: load("About")
  },
  {
    path: '/image',
    name: 'Image',
    component: load("Image")
  },
  {
    path: '/login',
    name: 'Login',
    beforeEnter(to,from,next){
      if (store.state.loginSuccess){
        next('/mypage')
      }
      else{
        next()
      }
    },
    component: load("Login")
  },
  {
    path: '/mypage',
    name: 'Mypage',
    beforeEnter(to,from,next){
      if (store.state.loginSuccess){
        next()
      }
      else{
        next('/login')
      }
    },
    component: load("Mypage")
  },
  {
    path: '/wheeldraw',
    name: 'WheelDraw',
    component: load("WheelDraw")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
  
//   if(store.state.loginSuccess){
//     console.log(store.state.loginSuccess)
//     next()
//   }

  
// })

export default router
