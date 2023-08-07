const {merge} = require("webpack-merge");
const commonConfig = require("./config/build/common");
const devConfig = require("./config/build/dev");
const prodConfig = require("./config/build/prod");

const envConfig = process.env.NODE_ENV === 'development' ? devConfig : prodConfig;

module.exports = merge(commonConfig, envConfig);