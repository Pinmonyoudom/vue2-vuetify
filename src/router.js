import Vue from 'vue'
import Router from 'vue-router'
import PurchaseOrder from './components/PurchaseOrder.vue'
import GeneratePDF from './components/GeneratePDF.vue'
import HomePage from './components/HomePage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/purchase-order',
      name: 'purchase-order',
      component: PurchaseOrder
    },
    {
      path: '/pdf',
      name: 'generate-pdf',
      component: GeneratePDF
    }
  ]
})
