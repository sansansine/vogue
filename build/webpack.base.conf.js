var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'/*入口文件*/
  },
  output: {/*指定项目构建的输出位置*/
    path: config.build.assetsRoot,/*必须使用绝对地址，输出文件夹*/
    filename: '[name].js',/*打包后输出文件的文件名*/
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath/*知道如何寻找资源*/
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {/*js 文件才使用 babel*/
        test: /\.js$/,
        loader: 'babel-loader',/*使用哪个 loader*/
        include: [resolve('src'), resolve('test')]/*包括路径*/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,/*图片格式正则*/
        loader: 'url-loader',/*使用 url-loader 和 file-loader可以处理图片*/
        options: {
          limit: 10000,/*限制图片大小10000B，小于限制会将图片转换为base64格式*/
          name: utils.assetsPath('img/[name].[hash:7].[ext]')/*超出限制，创建的文件格式,build/images/[图片名].[hash].[图片格式]*/
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: [resolve('static'), resolve('test')]
      },
    ]
  }
}
