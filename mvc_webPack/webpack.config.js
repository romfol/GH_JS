let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
    entry: './js/todo/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Todo list MVC',
            minify: {
                collapseWhitespace: true
            },
            template: './src/index.ejs'
            })
    ]
};