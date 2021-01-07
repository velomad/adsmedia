import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";
import Careers from "../views/Careers.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home,
		},
		{
			path: "/careers",
			name: "Careers",
			component: Careers,
		},
		{
			path: "/blogs",
			name: "Blogs",
			component: Blogs,
		},
	],
});
