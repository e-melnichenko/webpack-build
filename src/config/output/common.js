const path = require("path");

module.exports = {
  filename: '[name].bundle.[contenthash].js',
  assetModuleFilename: '[name].[contenthash][ext]',
  path: path.resolve(__dirname, 'dist'),
  clean: true,
}