const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname + '/dist/js',
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {test: /\.css$/, loaders: 'style-loader!css-loader'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: __dirname + '/dist/index.html',
      template: './src/index.html'
    }),
  ]
}