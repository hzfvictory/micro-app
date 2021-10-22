import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";

const app: any = createApp(App);
app.use(ElementPlus, {
  locale: zhCn
});
app.use(router).mount("#app-vite");



/*
let app: any = null;

function mount() {
  app = createApp(App);
  app.use(ElementPlus, {
    locale: zhCn
  });
  app.use(router).mount("#app-vite");
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

if (document.getElementById('app')) {
  window[`micro-app-mic-vite`] = { mount, unmount };
} else {
  mount();
}*/
