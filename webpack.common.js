const plugins = require('./src/config/plugins/common');
const webpackModule = require('./src/config/module/common');
const optimization = require('./src/config/optimization/common');
const entry = require('./src/config/entry/common');
const output = require('./src/config/output/common');

module.exports = {
  entry,
  output,
  plugins,
  module: webpackModule,
  optimization,
}