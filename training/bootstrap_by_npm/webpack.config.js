// https://getbootstrap.com/docs/4.4/getting-started/webpack/
module.exports = {
  watch: true,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
