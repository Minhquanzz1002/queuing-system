const common = require('./webpack.common');
const {merge} = require("webpack-merge");
const Dotenv = require("dotenv-webpack");

const config = {
    plugins: [new Dotenv({ path: './.env' })],
    devtool: "cheap-module-source-map",
    mode: "production",
}

module.exports = merge(common, config)