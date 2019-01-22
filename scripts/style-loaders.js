const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
    localIdentName: '[path][local]__[hash:base64:5]'
  }
}

const CSSLoader = {
  loader: 'css-loader',
  options: {
    modules: false,
    sourceMap: true
  }
}

module.exports = [
  {
    test: /\.scss$/,
    exclude: /\.module\.scss$/,
    use: ['style-loader', CSSLoader, 'postcss-loader', 'sass-loader']
  },
  {
    test: /\.module\.scss$/,
    use: [ 'style-loader', CSSModuleLoader, 'postcss-loader', 'sass-loader']
  }
]