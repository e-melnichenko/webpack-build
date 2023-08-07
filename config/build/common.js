const path = require("path");

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
    require("../plugins/miniCssExtractPlugin"),
    require("../plugins/htmlWebpackPlugin"),
  ],
  module: {
    rules: [
      require("../rules/tsx"),
      require("../rules/scss"),
      require("../rules/images"),
      require("../rules/fonts"),
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}