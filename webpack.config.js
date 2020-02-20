require("dotenv").config();

var path = require("path");

const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");

module.exports = env => {
  const isProduction = env && env.production !== undefined;

  const plugins = [new Dotenv(), new webpack.HotModuleReplacementPlugin()];
  console.log(__dirname);

  return {
    entry: "./app/index.js",

    mode: isProduction ? "production" : "development",

    output: {
      path: path.join(__dirname, "public"),
      filename: "main.js"
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            "css-loader"
          ]
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "fonts/"
              }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "media/images/"
              }
            }
          ]
        }
      ]
    },
    devtool: isProduction ? "none" : "cheap-module-eval-source-map",
    devServer: {
      contentBase: path.join(__dirname, ""),
      historyApiFallback: true,
      port: 8000,
      hot: true,
      publicPath: "/public"
    },

    plugins: plugins
  };
};
