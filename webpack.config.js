const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: ['core-js/fn/promise', './src/index.js'],
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
  },
  // only use DefinePlugin and UglifyJSPlugin for production not for development
  // ensures that the production build of react is used
  plugins: [
    new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin()
 ]
};
