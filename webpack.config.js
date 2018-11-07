// webpack v4
const path = require("path");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// change to chekc 

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.ts",
    userview: ["./src/userview.ts", "./src/scss/userview.scss"]
  },
  devServer: {
    contentBase: "./dist"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      // {
      //   test: /\.scss$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: ["css-loader", "sass-loader"]
      //   })
      // },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[content].bundle.js"
  },
  plugins: [
    new CleanWebpackPlugin("dist", {}),
    // new ExtractTextPlugin({
    //   filename: "style.[hash].css",
    //   disable: false,
    //   allChunks: true
    // }),
    new MiniCssExtractPlugin({ filename: "style.[contenthash].css" }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["main"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/userview.html",
      filename: "userview.html",
      chunks: ["userview"]
    }),
    new WebpackMd5Hash()
  ]
};
