import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _61f2496a = () => interopDefault(import('../pages/commande.vue' /* webpackChunkName: "pages/commande" */))
const _613079f4 = () => interopDefault(import('../pages/confirmation.vue' /* webpackChunkName: "pages/confirmation" */))
const _30515075 = () => interopDefault(import('../pages/final.vue' /* webpackChunkName: "pages/final" */))
const _e546ba3e = () => interopDefault(import('../pages/profile/_profile.vue' /* webpackChunkName: "pages/profile/_profile" */))
const _29faac5e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/commande",
    component: _61f2496a,
    name: "commande"
  }, {
    path: "/confirmation",
    component: _613079f4,
    name: "confirmation"
  }, {
    path: "/final",
    component: _30515075,
    name: "final"
  }, {
    path: "/profile/:profile?",
    component: _e546ba3e,
    name: "profile-profile"
  }, {
    path: "/",
    component: _29faac5e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
