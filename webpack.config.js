const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // require 'html-webpack-plugin' 

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/env', '@babel/react'] // what's presets?
        }
      },
      {
        test: /\.css$/i, 
        use: ["style-loader", "css-loader"],
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: path.resolve(__dirname, 'index.html'), 
    })
  ],
  devServer:{
    static:{
      publicPath: '/build',
      directory:path.resolve(__dirname,'build'),
    },
    port: 8080,
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:3000',
      },
    ],
  }
}