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
  chainWebpack: config => {
    config
      .plugin('define')
      .tap(args => {
        args[0]['process.env'] = JSON.stringify(process.env)
        return args
      })
  }
};
