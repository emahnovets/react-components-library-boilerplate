const path = require('path');
const styleLoaders = require('./scripts/style-loaders');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /\.stories\.(ts|tsx)$/,
        loader: 'ts-loader'
      },
      ...styleLoaders
    ]
  }
}