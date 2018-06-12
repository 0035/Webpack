const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    entry: {
        app: './src/index.js'
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
        }),
        new webpack.NamedModulesPlugin(),   //
        new webpack.HotModuleReplacementPlugin() //模块热替换Hot Module Replacement(HMR)
    ]
};