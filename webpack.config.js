const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // require 'html-webpack-plugin' 

module.exports = {
  entry: './client/index.js', // set an entry point
  output: { // set a path and filename of output (bundle file)
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV, // switch between 'production' and 'development'
  module: {
    // 'rules' is the most important sub-property of 'module'. 
    // It contains a set of rules that determine how Webpack should process different types of files.
    // Each rule is an object that specifies 1) what files to process (using 'test'), 2) how to process them (using 'use' or 'loader'). sometimes 'exclude' and 'options' etc.
    rules: [
      {
        test: /\.jsx?/, // 'test' property defines which files should be transformed by a loader or set of loaders. this case is for 'js' or 'jsx'
        loader: 'babel-loader', // 'loader' specifies which loader to use for processing files (defined above). 'babel-loader' is responsible for integrating Babel into the Webpack build process and allows webpack to transpile JavaScript/JSX files.
        exclude: /node_modules/,
        // for babel-loader, 'presets' defines sets of pre-configured Babel plugins (tell Babel how to which set of transformations to apply). 
        // They determine which transformations Babel will apply to your code. 
        options: {
          presets: [
            '@babel/env', // transpile modern JS (arrow function, class syntax, template literals etc.) to JavaScript that is compatible with older browsers
            '@babel/react', // transpile JSX and other React-specific syntax to JavaScript 
          ]
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
  devServer: {
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