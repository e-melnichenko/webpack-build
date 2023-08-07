const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = new HtmlWebpackPlugin({
  title: 'hello',
  template: './src/index.html'
})