const webpack = require('webpack');
const path = require('path');

const config = {
  entry: {
    dev: 'webpack-dev-server/client?http://0.0.0.0:8080',
    hot: 'webpack/hot/only-dev-server',
    html: './src/index.html',
    js: './src/main.jsx',
    vendors: ['react'],
  },
  devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {},
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    noParse: [],
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.css$/,
        loader: 'style!css!cssnext',
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel'],
      },
    ],
  },
  devServer: {
    contentBase: './',
    noInfo: true,
    hot: true,
    inline: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  ],
};

module.exports = config;
