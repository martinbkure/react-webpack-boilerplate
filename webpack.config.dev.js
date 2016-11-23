
module.exports = {
  entry: {
    path: './src/app'
  },
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
