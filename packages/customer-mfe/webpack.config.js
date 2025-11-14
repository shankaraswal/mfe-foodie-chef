// packages/customer-mfe/webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/main.tsx',
  mode: 'development',
  devServer: {
    port: 8082,
    host: '0.0.0.0',
    historyApiFallback: true,
    open: false,
    hot: true,
    liveReload: true,
    watchFiles: ['src/**/*'],
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      // 1. JS ESM Fix — Koi loader nahi!
      {
        test: /\.m?js$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
        // use: [] ← Koi loader nahi
      },

      // 2. TS/JSX/TSX → Babel
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },

      // 3. CSS — Sirf apne folder se, root Tailwind config
      {
        test: /\.css$/i,
        exclude: [/node_modules/, /webpack-dev-server/],
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, '../../postcss.config.js'), // ← Root config
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'customer_mfe',
      filename: 'remoteEntry.js',
      exposes: {
        './CustomerApp': './src/App.tsx', // ← .tsx add kiya (agar .tsx hai)
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.2.0', eager: true },
        'react-dom': { singleton: true, requiredVersion: '^18.2.0', eager: true },
        'react-router-dom': { singleton: true, requiredVersion: '^6.0.0', eager: true },
      },
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};