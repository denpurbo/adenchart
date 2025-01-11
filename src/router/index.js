import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/home/Index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    props: true,
    path: '/currencies/:slug?',
    name: 'Currencies',
    component: () => import(/* webpackChunkName: "currencies" */ '../views/currencies/Index')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "not-found" */ '../views/error-page/404')
  }
]

const router = createRouter({
  linkActiveClass: 'active',
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
  scrollBehavior () {
    return {
      top: 0
    }
  }
})

export default router
