const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const devServer = require('./src/config/devServer/dev');

module.exports = merge(common, {
  mode: 'development',
  devServer,
  devtool: 'inline-source-map',
});