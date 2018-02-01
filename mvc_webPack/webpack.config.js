let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
    entry: './src/js/todo/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{test:/\.css$/, use:['style-loader','css-loader']}]
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