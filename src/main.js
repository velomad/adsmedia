/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router/";
import VueScrollTo from "vue-scrollto";
import checkView from 'vue-check-view'
import VueCarousel from 'vue-carousel';
import InfiniteSlideBar from 'vue-infinite-slide-bar'
import VTooltip from 'v-tooltip'
import VueNumber from 'vue-number-animation'
import Notifications from 'vue-notification'

Vue.use(Notifications)
Vue.use(VueNumber)
Vue.component('infinite-slide-bar', InfiniteSlideBar)
Vue.use(VueCarousel);
Vue.use(checkView)
Vue.use(VueScrollTo, {
    offset: -110,
    easing:"ease-in-out",
    duration:800
});
Vue.use(VTooltip)


new Vue({ el: "#app", router, render: (h) => h(App) });
