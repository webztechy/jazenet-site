const commonPaths = require('./common-paths');
const webpack = require('webpack');
const dotenv = require('dotenv-webpack');

const port = process.env.PORT || 3000;

const config = {
    mode: 'development',
    entry: {
      app: `${commonPaths.appEntry}/index.js`
    },
    output: {
      filename: '[name].[hash].js',
      publicPath: '/'
    },
    resolve: {
      alias: {
        "react-dom": "@hot-loader/react-dom",
      },
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.css$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader',
                /* options: {
                    modules : {
                        namedExport : true, 
                        exportLocalsConvention : "camelCaseOnly",
                    },
                    
                } */
              }
            ]
          }
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new dotenv({  path: `${commonPaths.utitiesPath}/.env.dev` })
    ],
    devServer: {
      host: '192.168.1.117', //'localhost',
      port: port,
      historyApiFallback: true,
      hot: true,
      open: true
    }
  };

  module.exports = config;

