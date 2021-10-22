import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home.vue";
import Form from "../views/form.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/form",
    name: "form",
    component: Form
  }
];

const router = createRouter({
  history: createWebHashHistory("/mic-vite/"),
  routes
});

export default router;
