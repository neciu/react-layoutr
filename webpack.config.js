/* eslint-env node */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};

module.exports = config;
