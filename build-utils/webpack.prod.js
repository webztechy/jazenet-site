const commonPaths = require('./common-paths');
//const webpack = require('webpack');
const dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  mode: 'production',
  entry: {
    app: [`${commonPaths.appEntry}/index.js`]
  },
  output: {
    filename: 'static/[name].[hash].js',
    publicPath: 'http://localhost/react-webpack/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
          use: [
            {
              // We configure 'MiniCssExtractPlugin'              
              loader: MiniCssExtractPlugin.loader,
            }, 
            {
                loader: 'css-loader',
                /* options: {
                    modules : {
                        namedExport : true, 
                        exportLocalsConvention : "camelCaseOnly",
                    },
                    importLoaders: 1,
                    sourceMap: true
                } */
              },
            {
              loader: 'postcss-loader'
            }
          ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/styles.[hash].css'
    }),
    new dotenv({  path: `${commonPaths.utitiesPath}/.env.prod` })
  ]
};

module.exports = config;