import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import "./micro";
import { APP_BASE_URL } from "./utils/config";

Vue.use(ViewUI);

Vue.prototype.APP_BASE_URL = APP_BASE_URL;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
