const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "development",
  //   devtool: "eval-source-map",

  devServer: {
    historyApiFallback: true,
    static: {
      staticOptions: {
        redirect: true,
      },
    },
    open: true,
    hot: true,
  },

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          "style-loader",
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
