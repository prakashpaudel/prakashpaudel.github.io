var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './app/index.js'
  ],
  module: {
    loaders: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ["react-hot", "babel-loader"]
      },
      {
        test: /\.scss$/,
        loaders: ["style","css","postcss", "sass"]
      }
    ]
  },
  postcss: function () {
    return [autoprefixer({ browsers: ['last 2 versions'] })]
  },
  output: {
    path: __dirname,
    filename: 'index_bundle.js'
  },
  devServer: {
    hot: true
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin()
  ]
}