const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "users",
      filename: "remoteEntry.js",
      exposes: {
        "./UsersApp": "./src/index",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    port: 3000,
    host: "0.0.0.0",
    hot: true,
    open: true
  },
};
