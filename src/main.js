/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router/";
import VueScrollTo from "vue-scrollto";
import checkView from 'vue-check-view'
import VueCarousel from 'vue-carousel';
import InfiniteSlideBar from 'vue-infinite-slide-bar'
import VTooltip from 'v-tooltip'

Vue.component('infinite-slide-bar', InfiniteSlideBar)
Vue.use(VueCarousel);
Vue.use(checkView)
Vue.use(VueScrollTo);
Vue.use(VTooltip)


new Vue({ el: "#app", router, render: (h) => h(App) });
