const path = require("path");

module.exports = {
  lintOnSave: false,  // 取消eslint
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    }
  },

};
