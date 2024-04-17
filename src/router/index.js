import { createRouter, createWebHistory } from 'vue-router'
import PizzaShop from '../views/PizzaShop.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PizzaShop
    },
  ]
})

export default router
