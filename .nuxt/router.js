import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _095bc7e3 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _131967ee = () => interopDefault(import('..\\pages\\detailAd.vue' /* webpackChunkName: "pages/detailAd" */))
const _1943b05e = () => interopDefault(import('..\\pages\\detailDw.vue' /* webpackChunkName: "pages/detailDw" */))
const _23567d95 = () => interopDefault(import('..\\pages\\detailJt.vue' /* webpackChunkName: "pages/detailJt" */))
const _3c4614da = () => interopDefault(import('..\\pages\\detailYh.vue' /* webpackChunkName: "pages/detailYh" */))
const _2913a2a8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _095bc7e3,
    name: "about"
  }, {
    path: "/detailAd",
    component: _131967ee,
    name: "detailAd"
  }, {
    path: "/detailDw",
    component: _1943b05e,
    name: "detailDw"
  }, {
    path: "/detailJt",
    component: _23567d95,
    name: "detailJt"
  }, {
    path: "/detailYh",
    component: _3c4614da,
    name: "detailYh"
  }, {
    path: "/",
    component: _2913a2a8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
