import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Interests from '../views/Interests.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/vue-deploy-test/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vue-deploy-test/about',
    name: 'About',
    component: About
  },
  {
    path: '/vue-deploy-test/interests',
    name: 'Interests',
    component: Interests
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
