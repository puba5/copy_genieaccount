const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".vue"] //main.js에서 확장자 안넣어도 됨
  },
  entry: {
    app: path.join(__dirname, "main.js")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: "app.js", // [name].js로도 사용 가능
    path: path.join(__dirname, "dist"),
    publicPath: "/dist"
  }
};
