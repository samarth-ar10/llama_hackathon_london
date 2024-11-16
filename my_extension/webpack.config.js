const path = require('path');

module.exports = {
    entry: './content.js',
    output: {
        filename: 'content.bundle.js',
        path: path.resolve(__dirname), // Output to the current directory
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
    mode: 'development',
    devtool: 'cheap-module-source-map', // Change devtool to a safer option
};