import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import elementUI from "element-ui";
import "element-ui/packages/theme-chalk/lib/index.css";

Vue.config.productionTip = false;
Vue.use(elementUI);

// const app = new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");
//
// // 监听卸载
// window.addEventListener("unmount", function() {
//   // 卸载应用
//   app.$destroy();
// });


let app = null;

function mount() {
  app = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
}

function unmount() {
  app.$destroy();
  app.$el.innerHTML = '';
  app = null;
}

// 微前端环境下，注册mount和unmount方法
if (window.__MICRO_APP_ENVIRONMENT__) {
  window[`micro-app-${window.__MICRO_APP_NAME__}`] = { mount, unmount };
} else {
  // 非微前端环境直接渲染
  mount();
}
