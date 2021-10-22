const path = require("path");

module.exports = {
  lintOnSave: false,  // 取消eslint
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
