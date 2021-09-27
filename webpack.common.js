const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**@type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.js",
  devtool: "cheap-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "TITLE HERE",
      template: path.resolve(__dirname, "src", "index.template.html"),
      favicon: path.resolve(__dirname, "src/assets/favicon.ico"),
    }),
  ],

  output: {
    clean: true,
    assetModuleFilename: "assets/[hash][ext][query]",
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
