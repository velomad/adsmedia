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
import VueScrollReveal from 'vue-scroll-reveal';
import 'animate.css';
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'
Vue.use(SequentialEntrance);

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

Vue.use(VueScrollReveal, {
    class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
    duration: 600,
    scale: 1.2,
    distance: '5px',
    mobile: true
  });


new Vue({ el: "#app", router, render: (h) => h(App) });
