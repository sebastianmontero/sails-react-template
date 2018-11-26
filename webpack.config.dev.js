import webpack from 'webpack';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';

const HtmlWebpackPlugin = require('html-webpack-plugin');
//const precss = require('precss');
//const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: [
        './asset/js/index.js',
        'webpack-hot-middleware/client?reload=true'
    ],
    output: {
        path: path.join(__dirname, '/.tmp/public'),
        filename: 'bundle.js',
        publicPath: '/'
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
            }/*,
            {
                test: /\.(scss)$/,
                use: [{
                    loader: 'style-loader' // inject CSS to page
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS modules
                }, {
                    loader: 'postcss-loader', // Run post css actions
                    options: {
                        plugins: () => // post css plugins, can be exported to postcss.config.js
                            [
                                precss,
                                autoprefixer
                            ]
                    }
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            }*/
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'asset/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:8088',
        }, {
                reload: false, //view : https://www.youtube.com/watch?v=1j8C1V_DPQ4&t=726s
            }),
    ]
};