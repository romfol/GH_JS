let path = require('path');

module.exports = {
    entry: './js/todo/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};