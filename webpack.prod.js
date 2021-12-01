const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {

    output: {
        clean:true,
        filename: 'main.[contenthash].js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options:{
                    sources:false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader' 
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    },

    optimization: {
        minimize: true,
        minimizer: [
           new CssMinimizerPlugin(),
           new TerserPlugin(),
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title:'Mi Webpack App',
            template: './src/index.html',
            filename: 'index.html'
        }),

        new MiniCssExtractPlugin({
            //fullhash para que no guarde el doc en caché del cliente
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns:[
                {from: 'src/assets/', to:'assets/'}
            ]
        })
    ]

}

