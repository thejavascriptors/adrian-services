var path = require('path');


module.exports = {
  entry: `${__dirname}/client/index.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public`
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: `${__dirname}/client`,
        loader: 'babel-loader',
        query: {
          // plugins: ['@babel/plugin-proposal-object-rest-spread'],
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};