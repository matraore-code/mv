import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1a9f59a4 = () => interopDefault(import('../pages/commande.vue' /* webpackChunkName: "pages/commande" */))
const _e006dd2e = () => interopDefault(import('../pages/confirmation.vue' /* webpackChunkName: "pages/confirmation" */))
const _60c2c91c = () => interopDefault(import('../pages/final.vue' /* webpackChunkName: "pages/final" */))
const _404d87c4 = () => interopDefault(import('../pages/profile/_profile.vue' /* webpackChunkName: "pages/profile/_profile" */))
const _eb601664 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _1a9f59a4,
    name: "commande"
  }, {
    path: "/confirmation",
    component: _e006dd2e,
    name: "confirmation"
  }, {
    path: "/final",
    component: _60c2c91c,
    name: "final"
  }, {
    path: "/profile/:profile?",
    component: _404d87c4,
    name: "profile-profile"
  }, {
    path: "/",
    component: _eb601664,
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
