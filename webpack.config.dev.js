
module.exports = {
  entry: [
    './src/app',

    'webpack-dev-server/client?http://localhost:8080',

    'webpack/hot/only-dev-server'
  ],
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loaders: [
          'babel-loader'
        ],
        exclude: /node_modules/
      }
    ]
  }
};
