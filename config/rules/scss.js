const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  test: /\.scss$/,
  use: [
    MiniCssExtractPlugin.loader,
    "css-loader",
    "postcss-loader",
    "sass-loader",
  ],
};