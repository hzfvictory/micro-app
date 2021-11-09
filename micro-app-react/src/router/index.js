import List from "../pages/list";
import Detail from "../pages/detail";
import Home from "../pages/home";

export default {
  routes: [
    {
      path: "/",
      component: Home,
      exact: true,
      title: "首页"
    },
    {
      path: "/list",
      component: List,
      exact: true,
      title: "列表页"
    },
    {
      path: "/detail/:id?",
      component: Detail,
      exact: true,
      title: "详情页"
    }
  ]
};
