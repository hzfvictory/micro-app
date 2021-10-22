import "./public-path.js";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";

/*
const app: any = createApp(App);
app.use(ElementPlus, {
  locale: zhCn
});
app.use(store).use(router).mount("#app");

// 监听卸载
window.addEventListener("unmount", function() {
  console.log("微应用vue3卸载了");
  // 卸载应用
  app.unmount();
});
*/

let app: any = null;

function mount() {
  app = createApp(App);
  app.use(ElementPlus, {
    locale: zhCn
  });
  app.use(store).use(router).mount("#app");
}

function unmount() {
  app.unmount();
  app = null;
}

declare global {
  interface Window {
    __MICRO_APP_ENVIRONMENT__: string,

    [key: string]: object
  }
}

if (window.__MICRO_APP_ENVIRONMENT__) {
  window[`micro-app-${window.__MICRO_APP_NAME__}`] = { mount, unmount };
} else {
  mount();
}

