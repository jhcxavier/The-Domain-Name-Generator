const webpack = require('webpack');
const path = require('path');
const PrettierPlugin = require("prettier-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    './src/js/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/')
  },
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader']
        },
        {
          test: /\.(css|scss)$/, use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "sass-loader" // compiles Sass to CSS
          }]
        }, //css only files
        {
          test: /\.(png|svg|jpg|gif|ico)$/, use: {
            loader: 'file-loader',
            options: { name: '[name].[ext]' }
          }
        }, //for images
        { test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, use: ['file-loader'] } //for fonts
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  devtool: 'cheap-module-source-map',
  devServer: {
      hot: true,
      quiet: true,
      disableHostCheck: true
  },
  plugins: [
        new PrettierPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new ErrorOverlayPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            Popper: 'popper.js',
            jQuery: 'jquery',
            // In case you imported plugins individually, you must also require them here:
            Util: "exports-loader?Util!bootstrap/js/dist/util",
            Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
        }),
        new webpack.HotModuleReplacementPlugin(),
  ]
};