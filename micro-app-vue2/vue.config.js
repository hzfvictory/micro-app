const path = require("path");

module.exports = {
  lintOnSave: false,  // 取消eslint
  publicPath: "https://cdn.jsdelivr.net/gh/hzfvictory/cdn@master/micro/vue2/dist/", // 做区分
  devServer: {
    // 关闭主机检查，使微应用可以被 fetch
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    open: false
  },
  configureWebpack: {
    // output: {
    //   library: `micro-app-mic-vue2`,
    //   libraryTarget: 'umd',
    //   jsonpFunction: `webpackJsonp_micro-app-mic-vue2`,
    // },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    }
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "mic-vue2";
      return args;
    });
  }
};
