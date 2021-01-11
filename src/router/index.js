import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";
import SingleBlog from "../views/SingleBlog.vue";
import Careers from "../views/Careers.vue";

Vue.use(Router);

export default new Router({
	mode: 'history',
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
		{
			path: "/blogs/:blogID",
			name: "SingleBlog",
			component: SingleBlog,
		},
	],
});
