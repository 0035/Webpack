const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new webpack.NamedModulesPlugin(),   //
        new webpack.HotModuleReplacementPlugin() //模块热替换Hot Module Replacement(HMR)
    ]
});