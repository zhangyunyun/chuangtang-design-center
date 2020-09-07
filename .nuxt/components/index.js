export { default as ContactUs } from '../..\\components\\ContactUs.vue'
export { default as MySwiper } from '../..\\components\\MySwiper.vue'
export { default as BannerGuide } from '../..\\components\\banners\\BannerGuide.vue'
export { default as GoodGuide } from '../..\\components\\goods\\GoodGuide.vue'
export { default as HeaderGuide } from '../..\\components\\headers\\HeaderGuide.vue'
export { default as OnlineGuide } from '../..\\components\\onlines\\OnlineGuide.vue'

export const LazyContactUs = import('../..\\components\\ContactUs.vue' /* webpackChunkName: "components_ContactUs" */).then(c => c.default || c)
export const LazyMySwiper = import('../..\\components\\MySwiper.vue' /* webpackChunkName: "components_MySwiper" */).then(c => c.default || c)
export const LazyBannerGuide = import('../..\\components\\banners\\BannerGuide.vue' /* webpackChunkName: "components_banners/BannerGuide" */).then(c => c.default || c)
export const LazyGoodGuide = import('../..\\components\\goods\\GoodGuide.vue' /* webpackChunkName: "components_goods/GoodGuide" */).then(c => c.default || c)
export const LazyHeaderGuide = import('../..\\components\\headers\\HeaderGuide.vue' /* webpackChunkName: "components_headers/HeaderGuide" */).then(c => c.default || c)
export const LazyOnlineGuide = import('../..\\components\\onlines\\OnlineGuide.vue' /* webpackChunkName: "components_onlines/OnlineGuide" */).then(c => c.default || c)
