import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

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
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
