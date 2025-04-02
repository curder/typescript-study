const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 路径解析
const pathReslove = (p) => path.resolve(__dirname, p);

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: pathReslove("dist"),
    filename: "bundle.js",
  },
  resolve: {
    alias: {
      "@": pathReslove("src"),
    },
    extensions: [".ts", ".js", ".cjs", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
  devServer: {
    //
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
