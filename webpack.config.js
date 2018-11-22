const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        entry: './asset/src/index.js'
    },
    output: {
        path: __dirname + '/.tmp/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'asset/src/index.html'
        })
    ]
};