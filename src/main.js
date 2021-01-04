/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router/";
import VueScrollTo from "vue-scrollto";
import checkView from 'vue-check-view'
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);
Vue.use(checkView)
Vue.use(VueScrollTo);

new Vue({ el: "#app", router, render: (h) => h(App) });
