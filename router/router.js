import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Product from './views/Product.vue'
import Error404 from './views/Error404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/async',
    name: 'async',
    component: () => import('./views/AsyncPage.vue')
  },
  {
    path: '/product-detail/:product_id',
    name: 'product',
    component: Product
  },
  {
    path: '*',
    name: 'error404',
    component: Error404
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
