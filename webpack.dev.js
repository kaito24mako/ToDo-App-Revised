const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",

  devtool: "eval-source-map",

  devServer: {
    static: "./dist",
    watchFiles: ["./src/index.html"],
    open: true,
  },
});
