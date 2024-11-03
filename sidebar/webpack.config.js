const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  mode: 'development',
  devServer: {
    port: 3002,
    static: path.join(__dirname, 'public'),
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'sidebar',
      filename: 'remoteEntry.js',
      exposes: {
        './Sidebar': './src/Sidebar.jsx',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: require('react').version,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: require('react-dom').version,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
