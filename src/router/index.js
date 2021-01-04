import Vue from 'vue'
import Router from "vue-router";
import Home from "../views/Home.vue";

// const routes = [
// 	{
// 		path: "/",
// 		name: "Home",
// 		component: Home,
// 	},
// ];

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home,
		},
	],
});

// const router = new VueRouter({
// 	routes, // short for `routes: routes`
// });

// const router = createRouter({
// 	history: createWebHashHistory(),
// 	routes,
// });

// export default router;
