const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VENDOR_LIBS = ['react', 'react-dom', 'react-router-dom'];
const SRC_DIR = path.resolve(__dirname, 'src/view');
module.exports = {
    entry: {
        bundle: path.join(SRC_DIR, 'index.tsx'),
        vendor: VENDOR_LIBS
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'babel-loader',
            },
            {
                enforce: 'pre',
                test: /\.js?$/,
                loader: 'source-map-loader',
            },
            {
                test: /\.(css|scss|sass)$/i,
                use: [
                    process.env.NODE_ENV === 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {importLoaders: 1, sourceMap: true},
                    },
                    {
                        loader: 'sass-loader',
                        options: {sourceMap: true, implementation: require('sass')},
                    }
                ],
            },
            // Tells Webpack to treat these files as resources
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'asset/[hash][ext][query]'
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: SRC_DIR + '/index.html',
            favicon: 'src/shared/assets/images/logo.svg'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id]-[chunkhash].css',
        }),
        new CopyWebpackPlugin({
            patterns: [{ from: 'src/shared/assets/images', to: 'src/shared/assets/images' }]
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [new TsconfigPathsPlugin()]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[chunkhash].[chunkhash].js',
        chunkFilename: "[chunkhash].bundle.js",
        publicPath: "/",
        clean: true
    }
};
