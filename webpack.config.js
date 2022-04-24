const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // Chỉ định file nguồn sẽ bundle code khi chạy webpack
  // main: ['./src/index.js', './src/test.js'] combine nhiều file bundle thành 1
  entry: {
    main: "./src/index.js",
    home: "./src/home.js",
  },
  output: {
    // Tên của file js sau khi đã được bundle
    // filename: "[name].js" dùng để tạo nhiều entry point
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          //  Show xem css đang ở dòng bao nhiêu và có thể import các file css khác nhau
          { loader: "css-loader", options: { sourceMap: true, import: true } },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: "file-loader",

        options: {
          name: "[path][name].[ext]",
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    open: true,
  },
  // Show lỗi ở file nào chứ không show lỗi trong file bundle nữa
  mode: "development",
  // Watch mode theo dõi người dùng cập nhật code và bundle lại
  // watch: true
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Demo",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
