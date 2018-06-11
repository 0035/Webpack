const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new webpack.BannerPlugin({
            // banner:
            // 	"hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]"
            banner: "版权所有，翻版必究。/n"
        }),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
            hash: true
        })
    ]
};