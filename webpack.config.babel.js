import path from 'path';


const distPath = path.join(__dirname, 'dist');

export default {
  devtool: 'source-map',
  entry: './src/index.js',
  devServer: {
    contentBase: distPath,
    port: 9000,
    historyApiFallback: true
  },
  output: {
    path: distPath + '/js/',
    publicPath: 'js/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
