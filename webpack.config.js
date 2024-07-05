const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // require 'html-webpack-plugin' 

module.exports = {
  // set multiple entry points 
  entry: {
    main: './client/index.js',
    signup: './client/signup.js',
    login: './client/login.js',
  }, 
  // set a path and filename of output (bundle file)
  output: { 
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
  },
  // switch between 'production' and 'development'
  mode: process.env.NODE_ENV, 
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
      title: 'main',
      chunks: ['main'], // This will include only the main bundle
      template: path.resolve(__dirname, 'index.html'), 
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'signup',
      chunks: ['signup'], // This will include only the signup bundle
      template: path.resolve(__dirname, 'client/signup.html'),
      filename: 'signup.html'
    }),
    new HtmlWebpackPlugin({
      title: 'login',
      chunks: ['login'], // This will include only the login bundle
      template: path.resolve(__dirname, 'client/login.html'),
      filename: 'login.html'
    }),
  ],
  devServer: {
    static:{
      publicPath: '/build',
      directory:path.resolve(__dirname,'build'),
    },
    port: 8080,
    proxy: [
      {
        context: ['/api', '/signup', '/login'], // added /signup & /login
        target: 'http://localhost:3000',
      },
    ],
  }
}