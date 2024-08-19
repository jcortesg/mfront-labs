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
      name: "container",
      remotes: {
        users: "users@http://localhost:3001/remoteEntry.js",
        tasks: "tasks@http://localhost:3002/remoteEntry.js",
        reports: "reports@http://localhost:3003/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    port: 8080,
    host: "0.0.0.0",
    hot: true,
    open: true,
  },
};
