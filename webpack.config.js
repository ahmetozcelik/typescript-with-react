const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: "source-map",
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    })],
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
        ],
    },
    watch: true,
    devServer: {
        port:1453,
        index: "index.html",
        open: true
    }
}

