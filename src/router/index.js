import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

import NewsInFull from "../views/NewsInFull"

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: "/:filter",
    name: "news",
    component: NewsInFull,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
