const common = require('./webpack.common.js');
const {merge} = require("webpack-merge");
const Dotenv = require("dotenv-webpack");
const webpack = require('webpack');

const devServer = {
    port: 4545,
    open: true,     // Automatically open browser on project start
    historyApiFallback: {
        verbose: true,
    },
    compress: true, // Enables compression of static assets (CSS, Javascript, HTML,..)
    headers: {'Access-Control-Allow-Origin': '*'},
    static: {
        publicPath: '/',
        watch: true
    },
    watchFiles: ['src/**/*.(tsx|ts|scss|png|jpg)', 'public/**/*'],
    hot: true
};

const config = {
    mode: "development",
    devtool: "source-map",
    devServer,
    plugins: [
        new Dotenv({path: './.env.development'}),
        new Dotenv({path: './.env'}),
        new webpack.HotModuleReplacementPlugin(),
    ],
};

module.exports = merge(common, config);