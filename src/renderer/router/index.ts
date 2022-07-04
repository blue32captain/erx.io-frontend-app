import { createRouter, createWebHistory } from 'vue-router'

import authStore from '../store/modules/Auth/auth.module'
import routes from './routes'
import globalStore from '../store/globalStore'
import $toast from '../index'

export const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, _from, next) => {
  if (!to.matched.some(record => record.meta.private)) {
    return next()
  }

  if (!authStore.logged) {
    globalStore.previousRoute = to.path
    return next({ name: 'login' })
  }

  if (!to.meta?.roles || to.meta?.roles.includes(authStore.role)) {
    return next()
  }

  globalStore.previousRoute = ''

  $toast.warning('Unauthorized')

  return next({ name: 'dashboard' }) // TODO redirect to unauthorized page
})
