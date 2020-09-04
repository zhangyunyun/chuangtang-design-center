import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _424f1808 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _75b4e9a9 = () => interopDefault(import('..\\pages\\detailAd.vue' /* webpackChunkName: "pages/detailAd" */))
const _7bdf3219 = () => interopDefault(import('..\\pages\\detailDw.vue' /* webpackChunkName: "pages/detailDw" */))
const _f41c0160 = () => interopDefault(import('..\\pages\\detailJt.vue' /* webpackChunkName: "pages/detailJt" */))
const _c23cd2d6 = () => interopDefault(import('..\\pages\\detailYh.vue' /* webpackChunkName: "pages/detailYh" */))
const _6206f2cd = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _424f1808,
    name: "about"
  }, {
    path: "/detailAd",
    component: _75b4e9a9,
    name: "detailAd"
  }, {
    path: "/detailDw",
    component: _7bdf3219,
    name: "detailDw"
  }, {
    path: "/detailJt",
    component: _f41c0160,
    name: "detailJt"
  }, {
    path: "/detailYh",
    component: _c23cd2d6,
    name: "detailYh"
  }, {
    path: "/",
    component: _6206f2cd,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
