export { default as ContactUs } from '../..\\components\\ContactUs.vue'
export { default as OnlineGuide } from '../..\\components\\onlines\\OnlineGuide.vue'
export { default as HeaderGuide } from '../..\\components\\headers\\HeaderGuide.vue'

export const LazyContactUs = import('../..\\components\\ContactUs.vue' /* webpackChunkName: "components_ContactUs" */).then(c => c.default || c)
export const LazyOnlineGuide = import('../..\\components\\onlines\\OnlineGuide.vue' /* webpackChunkName: "components_onlines/OnlineGuide" */).then(c => c.default || c)
export const LazyHeaderGuide = import('../..\\components\\headers\\HeaderGuide.vue' /* webpackChunkName: "components_headers/HeaderGuide" */).then(c => c.default || c)
