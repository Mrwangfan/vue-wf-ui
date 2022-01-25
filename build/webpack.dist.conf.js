/*
 * @Author: fan wang
 * @Date: 2022-01-25 10:08:18
 * @LastEditTime: 2022-01-25 14:50:27
 * @LastEditors: fan wang
 * @Description: 组件描述
 * @FilePath: \vue-wf-ui\build\webpack.dist.conf.js
 */
'use strict'
const path = require('path')
const merge = require('webpack-merge')
const utils = require('./utils')
const base = require('./webpack.base.conf.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const webpackConfig = merge(base, {
  entry: path.resolve(__dirname, '../', 'packages/index.js'),
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: process.env.NODE_ENV === 'production' ? 'vue-wf-ui.min.js' : 'vue-wf-ui.js',
    library: 'vue-wf-ui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/vue-wf-ui.css'),
      allChunks: true,
    })
  ],
})
module.exports = webpackConfig