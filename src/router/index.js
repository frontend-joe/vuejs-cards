import Vue from "vue";
import VueRouter from "vue-router";

import InstaFirstSlide from "@/components/feature/carousel/InstaFirstSlide";
import InstaFirstSlideAlt from "@/components/feature/carousel/InstaFirstSlideAlt";
import InstaResultSlide from "@/components/feature/carousel/InstaResultSlide";
import InstaLastSlide from "@/components/feature/carousel/InstaLastSlide";
import InstaLastSlideAlt from "@/components/feature/carousel/InstaLastSlideAlt";
import InstaExampleSlide from "@/components/feature/carousel/InstaExampleSlide";
import AllCards from "@/components/feature/dashboard/AllCards";
import PulsingMapDashboard from "@/components/feature/dashboard/PulsingMapDashboard";
import RotatingInfoCardDashboard from "@/components/feature/dashboard/RotatingInfoCardDashboard";

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
    path: "/insta-first-alt",
    name: "InstaFirstSlideAlt",
    component: InstaFirstSlideAlt
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
