import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import image from '../views/Image.vue'

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
    component: load("Login")
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

export default router
