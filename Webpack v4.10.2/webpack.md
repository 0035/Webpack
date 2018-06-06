// 入口起点(entry points)
```javascript
const path = require('path');

module.exports = {
    entry: './path/to/my/entry/file.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    }
};
```
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ //
```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件

const config = {
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
};

module.exports = config;
```
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ //
```javascript
// 单个入口（简写）语法
const config = {
    entry: './path/to/my/entry/file.js'
};

module.exports = config;
//   entry 属性的单个入口语法，是下面的简写：
const config = {
    entry: {
        main: './path/to/my/entry/file.js'
    }
};
```
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ //
```javascript
// 对象语法
const config = {
    entry: {
        app: './src/app.js',
        vendors: './src/vendors.js'
    }
};
```
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ //
```javascript
// 多页面应用程序
const config = {
    entry: {
        pageOne: './src/pageOne/index.js',
        pageTwo: './src/pageTwo/index.js',
        pageThree: './src/pageThree/index.js'
    }
};
```
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ //
```javascript
// 输出(output)
const config = {
    output: {
        filename: 'bundle.js',
        path: '/home/proj/public/assets'
    }
};

module.exports = config;
```
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ //
```javascript
// 多个入口起点
{
    entry: {
        app: './src/app.js',
            search: './src/search.js'
    },
    output: {
        filename: '[name].js',
            path: __dirname + '/dist'
    }
}
// 写入到硬盘：./dist/app.js, ./dist/search.js
```
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ //
```javascript
// 高级进阶
// 以下是使用 CDN 和资源 hash 的复杂示例：
output: {
    path: "/home/proj/cdn/assets/[hash]",
        publicPath: "http://cdn.example.com/assets/[hash]/"
}

__webpack_public_path__ = myRuntimePublicPath

// 剩余的应用程序入口
```
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ //
```javascript
// 模式(mode)
module.exports = {
    mode: 'production'
};
// 或者从 CLI 参数中传递：
// webpack --mode=production
```
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ //
```javascript
// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack'); //访问内置的插件
const path = require('path');

const config = {
  entry: './path/to/my/entry/file.js',
  output: {
    filename: 'my-first-webpack.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;
```