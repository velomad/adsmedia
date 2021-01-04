/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router/";
import VueScrollTo from "vue-scrollto";
Vue.use(VueScrollTo);

new Vue({
	el: "#app",
	router,
	template: "<App/>",
	components: { App },
});

// createApp(App)
// 	.use(router)
// 	.mount("#app");
