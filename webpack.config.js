module.exports = {
    entry: './Client/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/Client',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './Client'
    }
  };