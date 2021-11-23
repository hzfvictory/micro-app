const path = require("path");

module.exports = {
  lintOnSave: false,  // 取消eslint
  // publicPath: "https://cdn.jsdelivr.net/gh/hzfvictory/cdn@master/micro/vue3/dist/", // 做区分 打开这个需要提前做CDN
  devServer: {
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    open:false
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    }
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "mic-vue3";
      return args;
    });
  }
};
