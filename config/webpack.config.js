const pathUtil = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const appRoot = pathUtil.join(__dirname, '..');
const srcPath = pathUtil.join(appRoot, 'static');
const distPath = pathUtil.join(appRoot, 'public/g');


/* eslint no-process-env: 0 */

const env = process.NODE_ENV;


module.exports = {
  entry: {
    page: pathUtil.join(srcPath, 'pages/page')
  },


  output: {
    path: distPath,
    filename: '[name].js',
    chunkFilename: "[id]-[chunkhash].js",
    publicPath: '/g/'
  },


  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      }
    ]
  },


  plugins: [
    new CopyWebpackPlugin([{
      from: pathUtil.join(srcPath, 'public'),
      to: distPath
    }])
  ],


  resolve: {
    alias: {
    }
  }
};