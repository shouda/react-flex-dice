const webpack = require('webpack');
const path = require('path');

const config = {
  entry: {
    html: path.resolve(__dirname, 'src/index.html'),
    js: path.resolve(__dirname, 'src/main.jsx'),
    vendors: ['react'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {},
    extensions: ['', '.js', '.jsx'],
  },
  module: {
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
        test: /\.jsx$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: '"production"'},
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  ],
};

module.exports = config;
