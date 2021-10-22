import Vue from "vue";
import VueRouter from "vue-router";
import { Message } from "view-design";

import Home from "../views/home.vue";
import NotFound from "../views/404.vue";

import MicReact from "../views/react17.vue";
import MicVue2 from "../views/vue2.vue";
import MicVue3 from "../views/vue3.vue";
import MicVite from "../views/vite.vue";
import MicMultiple from "../views/multiple.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/404",
    component: NotFound
  }
];

let asyncRouter = [
  {
    path: "/mic-react/*",
    component: "MicReact"
  },
  {
    path: "/mic-vue2/*",
    component: "MicVue2"
  },
  {
    path: "/mic-vue3/*",
    component: "MicVue3"
  },
  {
    path: "/mic-vite/*",
    component: "MicVite"
  },
  {
    path: "/multiple/*",
    component: "MicMultiple"
  }
];

export const menuRoute = {
  MicReact,
  MicVue2,
  MicVue3,
  MicVite,
  MicMultiple
};

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 导航守卫
router.beforeEach(async (to, from, next) => {
  if (to.path === "/login") {
    next();
  } else {
    if (!router.options.isAddAsyncMenuData) {
      try {
        routerGo(to, next);
      } catch (error) {
        Message.error(error);
      }
    } else {
      next();
    }

  }
});

function routerGo(to, next) {
  router.options.isAddAsyncMenuData = true; // 防止多次执行
  asyncRouter = filterAsyncRouter(asyncRouter);

  if (asyncRouter[0]) {
    asyncRouter.unshift(
      {
        path: "/",
        redirect: "/login"
      }
    );
  }
  asyncRouter.push(
    {
      path: "*",
      redirect: "/404"
    }
  );

  asyncRouter.map((ele) => {
    router.addRoute(ele);
  });

  next({
    ...to,
    replace: true
  });// hack方法 确保addRoute已经完成

}

function filterAsyncRouter(asyncRouterMap) {
  return asyncRouterMap.filter(route => {
    if (route.component) {
      if (route.component) {
        route.component = menuRoute[route.component];
      } else {
        route.component = {
          render: (c) => c("router-view")
        };
      }
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children);
    }
    return true;
  });
}

export default router;
