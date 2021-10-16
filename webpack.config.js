const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
        'style-loader',
        'css-loader',
        'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    static: {
      publicPath: '/public',
    },
    proxy: {
      '/api/**': 'http://localhost:3000/'
    }
  },
  resolve: {
    extensions: ['.js','.jsx'],
  }
};