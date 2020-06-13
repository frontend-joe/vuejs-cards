import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

import App from "./App.vue";

import router from "./router";

Vue.config.productionTip = false;

Vue.use(require("vue-chartist"));

// Register the component globally
library.add(fab);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
