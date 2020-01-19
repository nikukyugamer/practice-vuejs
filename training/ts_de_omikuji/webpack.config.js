const path = require('path');

module.exports = {
  mode: 'development',
  // entry: './src/index.js',
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      // {
      //   test: /\.(css|scss)$/,
      //   include: path.resolve(__dirname, 'src'),
      //   use: ['style-loader', 'css-loader', 'sass-loader'],
      // },
    ],
  },
  devServer: {
    contentBase: './',
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    extensions: ['.ts'],
  },
};
