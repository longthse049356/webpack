const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Chỉ định file nguồn sẽ bundle code khi chạy webpack
    entry: './src/index.js',
    output: {
        // Tên của file js sau khi đã được bundle
        filename: "main.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    mode: "development",
    // Watch mode theo dõi người dùng cập nhật code và bundle lại
    // watch: true
    plugins: [new HtmlWebpackPlugin({
        title: "Webpack Demo",
        filename: "index.html"
    })]
}