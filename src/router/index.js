import Vue from "vue";
import VueRouter from "vue-router";

import InstaFirstSlide from "@/components/feature/InstaFirstSlide";
import InstaResultSlide from "@/components/feature/InstaResultSlide";
import InstaLastSlide from "@/components/feature/InstaLastSlide";
import AllCards from "@/components/feature/AllCards";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "allWidgets",
    component: AllCards
  },
  {
    path: "/insta-first",
    name: "InstaFirstSlide",
    component: InstaFirstSlide
  },
  {
    path: "/insta-result",
    name: "InstaResultSlide",
    component: InstaResultSlide
  },
  {
    path: "/insta-last",
    name: "InstaLastSlide",
    component: InstaLastSlide
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
