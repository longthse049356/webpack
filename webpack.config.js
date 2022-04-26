const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (_env, argv) {
  const isProduction = argv.mode === "production";
  const isDevelopment = !isProduction;

  return {
    // Sau khi khi đã bundle code ra nhưng vẫn ánh xa ngược lại file src từ build bundle.
    // Để biết file lỗi ở đâu, css ở dòng nào??
    devtool: isDevelopment && "cheap-module-source-map",
    // Chỉ định file nguồn sẽ bundle code khi chạy webpack
    // main: ['./src/index.js', './src/test.js'] combine nhiều file bundle thành 1
    entry: "./src/index.js",
    output: {
      // Tên của file js sau khi đã được bundle
      // filename: "[name].js" dùng để tạo nhiều entry point
      filename: "[name].js",
      path: path.resolve(__dirname, "build"),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.m?jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
          resolve: {
            extensions: [".js", ".jsx"],
          },
        },
        {
          test: /\.s?[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
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
        template: "public/index.html",
      }),
      new MiniCssExtractPlugin(),
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  };
};
