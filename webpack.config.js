const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {

    output: {
        clean:true
    },
    mode: 'development',
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
            }
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
            filename: '[name].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns:[
                {from: 'src/assets/', to:'assets/'}
            ]
        })
    ]

}

