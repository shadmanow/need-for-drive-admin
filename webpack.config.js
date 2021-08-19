const path = require("path");

// variables
const SRC = path.resolve(__dirname, "./src");
const DIST = path.resolve(__dirname, "./build");
const MODE = process.env.MODE.trim();
const PUBLIC_PATH = MODE === 'production' ? '/admin-panel/' : '/'

//plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  context: SRC,
  entry: "./index.tsx",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(ttf)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },
      {
        test: /\.(png|jpg)/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[hash][ext]",
        },
      },
      {
        test: /\.svg/,
        use: ["@svgr/webpack"],
        issuer: /\.(ts|js)x?$/,
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postCssOptions: {
                plugins: ["autoprefixer"],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "postcss-loader",
            options: {
              postCssOptions: {
                plugins: ["autoprefixer"],
              },
            },
          },
          "css-loader",
        ],
      },
    ],
  },
  mode: MODE,
  output: {
    path: DIST,
    filename: "[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./index.html",
      publicPath: PUBLIC_PATH,
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    contentBase: DIST,
    port: 8080,
    historyApiFallback: true,
    hotOnly: true,
    open: true,
  },
};
