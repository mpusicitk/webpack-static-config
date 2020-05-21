const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path')
const fs = require('fs')

// Store .html file names in src/html in an array
const pages =
  fs
    .readdirSync(path.resolve(__dirname, 'src/html'))
    .filter(fileName => fileName.endsWith('.html'))

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.[contenthash].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...pages.map(page => new HtmlWebpackPlugin({
      template: `./src/html/${page}`,
      filename: page
    })),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.ttf$/,
        loaders: [
          'url-loader'
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
    ]
  }
}
  