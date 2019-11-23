const HtmlWebpackPlusin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: "html-loader",
          options: {minimize: true}
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlusin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
};
