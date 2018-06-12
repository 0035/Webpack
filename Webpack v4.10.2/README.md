# Webpack v4.11.1 指南 （安装-起步-管理资源）

## 新建项目
> npm init -y

## 安装Webpack && Webpack-cli
> npm install webpack webpack-cli --save-dev

## 数据解构
> npm install --save lodash

## 编译CSS STYLE
> npm install --save-dev style-loader css-loader

## 编译文件 图片 字体等
> npm install --save-dev file-loader

## 编译Json csv tsv xml数文件
> npm install --save-dev csv-loader xml-loader

## 安装html-webpack-plugin
> npm install --save-dev html-webpack-plugin

## 冗余编译文件清理
> npm install clean-webpack-plugin --save-dev

## 使用 webpack-dev-server
> npm install --save-dev webpack-dev-server

## 使用 express && webpack-dev-middleware
> npm install --save-dev express webpack-dev-middleware

## [其他代码和框架](https://webpack.docschina.org/guides/hot-module-replacement/#%E5%85%B6%E4%BB%96%E4%BB%A3%E7%A0%81%E5%92%8C%E6%A1%86%E6%9E%B6)

社区还有许多其他 loader 和示例，可以使 HMR 与各种框架和库(library)平滑地进行交互……

React Hot Loader：实时调整 react 组件。
Vue Loader：此 loader 支持用于 vue 组件的 HMR，提供开箱即用体验。
Elm Hot Loader：支持用于 Elm 程序语言的 HMR。
Redux HMR：无需 loader 或插件！只需对 main store 文件进行简单的修改。
Angular HMR：没有必要使用 loader！只需对主要的 NgModule 文件进行简单的修改，由 HMR API 完全控制。