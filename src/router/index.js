import Vue from "vue";
import VueRouter from "vue-router";

import InstaFirstSlide from "@/components/feature/InstaFirstSlide";
import InstaResultSlide from "@/components/feature/InstaResultSlide";
import InstaLastSlide from "@/components/feature/InstaLastSlide";
import InstaLastSlideAlt from "@/components/feature/InstaLastSlideAlt";
import InstaExampleSlide from "@/components/feature/InstaExampleSlide";
import AllCards from "@/components/feature/AllCards";
import PulsingMapDashboard from "@/components/feature/PulsingMapDashboard";
import RotatingInfoCardDashboard from "@/components/feature/RotatingInfoCardDashboard";

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
  },
  {
    path: "/insta-last-alt",
    name: "InstaLastSlideAlt",
    component: InstaLastSlideAlt
  },
  {
    path: "/pulsing-map",
    name: "PulsingMapDashboard",
    component: PulsingMapDashboard
  },
  {
    path: "/dashboard",
    name: "RotatingInfoCardDashboard",
    component: RotatingInfoCardDashboard
  },
  {
    path: "/insta-example",
    name: "InstaExampleSlide",
    component: InstaExampleSlide
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
