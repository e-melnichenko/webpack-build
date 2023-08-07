const path = require("path");

const miniCssExtractPlugin = require("../plugins/miniCssExtractPlugin");
const htmlWebpackPlugin = require("../plugins/htmlWebpackPlugin");

const tsx = require("../rules/tsx");
const scss = require("../rules/scss");
const images = require("../rules/images");
const fonts = require("../rules/fonts");

module.exports = {
  entry: {
    index: './src/js/index.ts',
    print: './src/js/print.js',
  },
  output: {
    filename: '[name].bundle.[contenthash].js',
    assetModuleFilename: '[name].[contenthash][ext]',
    path: path.resolve(__dirname, '../../dist'),
    clean: true,
  },
  plugins: [
    miniCssExtractPlugin,
    htmlWebpackPlugin,
  ],
  module: {
    rules: [
      tsx,
      scss,
      images,
      fonts,
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}