const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');



module.exports = {
  entry: `${__dirname}/client/index.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public`
  },
  plugins: [
    new CompressionPlugin(),
  ],
  externals: {
    'react-dom': 'ReactDOM',
    'react': 'React',
    'axios': 'axios'
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