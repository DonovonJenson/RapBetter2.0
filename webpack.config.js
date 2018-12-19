module.exports = {
    entry: './Client/index.js',
    output: {
      path: __dirname + '/Client',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './Client'
    }
  };