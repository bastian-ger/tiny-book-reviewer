const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    // this is where the bundle.js will be saved
    path: path.resolve(__dirname, 'public'),
    // this is where webpack-dev-server will serve its bundled files
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
},
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
