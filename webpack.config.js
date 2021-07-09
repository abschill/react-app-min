const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry:"./src/index.js",
  devtool:"inline-source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader:'babel-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader'
      },
      {
        test:/\.css$/i,
        use:["style-loader", "css-loader"]
      }
    ],
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'index.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    port:3000,
    compress:true,
    hot: true,
    inline:true
  },
  target:"web"
};