var path = require('path');


module.exports = {
  entry: `${__dirname}/client/index.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public`
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: `${__dirname}/client`,
        use: 'babel-loader',
      }
    ]
  }
};