const path = require('path');

// variables
const SRC = path.resolve(__dirname, './src');
const DIST = path.resolve(__dirname, './build');
const MODE = process.env.MODE.trim();
const IS_DEV = MODE === 'development';
const PUBLIC_PATH = IS_DEV ? '/' : '/need-for-drive-admin/';

// plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  context: SRC,
  entry: './index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@assets': path.join(SRC, 'assets'),
      '@components': path.join(SRC, 'components'),
      '@store': path.join(SRC, 'store'),
      '@pages': path.join(SRC, 'pages'),
      '@api': path.join(SRC, 'api'),
      '@hooks': path.join(SRC, 'hooks'),
      '@constants': path.join(SRC, 'constants'),
      '@helpers': path.join(SRC, 'helpers'),
      '@utils': path.join(SRC, 'utils')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(ttf|eot|woff)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]'
        }
      },
      {
        test: /\.(png|jpg)/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash][ext]'
        }
      },
      {
        test: /\.svg/,
        oneOf: [
          {
            dependency: { not: ['url'] },
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  svgoConfig: {
                    plugins: {
                      removeViewBox: false
                    }
                  }
                }
              },
              {
                loader: 'new-url-loader'
              }
            ]
          },
          {
            type: 'asset'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']]
              }
            }
          }
        ]
      }
    ]
  },
  mode: MODE,
  output: {
    path: DIST,
    filename: '[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html',
      publicPath: PUBLIC_PATH
    }),
    new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/styles.[hash].css'
    }),
    new Dotenv()
  ],
  devServer: {
    port: 3000,
    contentBase: DIST,
    historyApiFallback: true,
    hot: true,
    hotOnly: true,
    open: true
  }
};
