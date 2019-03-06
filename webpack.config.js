const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.join(__dirname, '/dist/js'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/, loaders: 'style-loader!css-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, '/dist/index.html'),
      template: './src/index.html',
    }),
  ],
};
