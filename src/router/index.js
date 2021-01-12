import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";
import SingleBlog from "../views/SingleBlog.vue";
import Careers from "../views/Careers.vue";
import Jobs from "../views/Jobs.vue";
import SingleJob from "../views/SingleJob.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
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
      path: "/careers/jobs",
      name: "Jobs",
      component: Jobs,
    },
    {
      path: "/blogs/:blogID",
      name: "SingleBlog",
      component: SingleBlog,
    },
    {
      path: "/job/:jobID",
      name: "SingleJob",
      component: SingleJob,
    },
  ],
});
