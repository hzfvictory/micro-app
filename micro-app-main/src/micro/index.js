import microApp from "@micro-zoe/micro-app";

console.log(microApp);

microApp.start({
  plugins: {
    modules: {
      // 兼容 sockjs-node
      "mic-react": [{
        loader(code) {
          if (code.indexOf("sockjs-node") > -1) {
            code = code.replace("window.location.port", "9001");
          }
          return code;
        }
      }],
      "react17-2": [{
        loader(code) {
          if (code.indexOf("sockjs-node") > -1) {
            code = code.replace("window.location.port", "9001");
          }
          return code;
        }
      }],
      // 适配 vite
      "mic-vite": [{
        loader(code) {
          if (process.env.NODE_ENV === "development") {
            code = code.replace(/(from|import)(\s*['"])(\/mic-vite\/)/g, all => {
              return all.replace("/mic-vite/", "http://localhost:9004/mic-vite/");
            });
          }

          return code;
        }
      }]
    }
  }
  // lifeCycles: {
  //   created(e) {
  //     console.log("初始化", "created");
  //   },
  //   beforemount(e) {
  //     console.log("加载资源完成", "beforemount");
  //   },
  //   mounted(e) {
  //     console.log("渲染结束", "mounted");
  //   },
  //   unmount(e) {
  //     console.log("卸载", "unmount");
  //   },
  //   error(e) {
  //     console.log("error");
  //   }
  // }
});

microApp.preFetch(() => [
  // { name: "mic-vue2", url: "http://localhost:9002/img/logo.png" }

]);