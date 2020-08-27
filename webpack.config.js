const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './assets/js/index.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: './assets/js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: 
        [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'style.css' }),
  ],
  devServer: {
    watchContentBase: true,
    contentBase: path.resolve(__dirname, 'assets/js'),
    open: true
  }
}
