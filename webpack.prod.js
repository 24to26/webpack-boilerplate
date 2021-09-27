const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "production",
  devtool: "hidden-nosources-source-map",
  optimization: {
    // runtimeChunk: "single",
    // splitChunks: {
    //   chunks: "all",
    // },
  },

  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "build"),
  },

  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              //   modules: true,
              //   importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {},
          },
          "sass-loader",
        ],
      },
    ],
  },
};
