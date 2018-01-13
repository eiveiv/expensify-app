const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      test: /\.s?css$/,
      use: ['style-loader',
          'css-loader',
          'sass-loader'
        ]   //use lar oss definere en array av loaders
    }  
  ]
  },
  devtool: 'cheap-module-eval-source-map',  //Gir debugging much love
  devServer: {  //Lager bundle.js file i minne så det skal gå mye raskere under utvikling
    contentBase: path.join(__dirname, 'public'),
    port: 8085
  }
};
