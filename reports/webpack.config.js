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
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Procesa archivos .js y .jsx
        exclude: /node_modules/, // No procesa los archivos de node_modules
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Usa los presets de Babel para ES6 y React
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "reports",
      filename: "remoteEntry.js",
      exposes: {
        "./ReportsApp": "./src/index",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    port: 3000,
    host: "0.0.0.0",
  },
};
