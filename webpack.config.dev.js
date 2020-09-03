const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 3000;

module.exports = {
    //모드 설정
    mode : 'development',

    //시작 경로
    entry: './src/index.tsx',

    //결과물
    output : {
        filename : 'bundle.dev.js',
        path: path.join(__dirname, "/dist"),
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use : {
                    loader: 'ts-loader',
                }
            },

            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },

            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize : true,
                        }
                    },
                ],
            },

            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader' , 'css-loader' , 'sass-loader'
                ],
            },

            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                        }
                    },
                ]
            },

            {
                test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                  name: '[hash].[ext]',
                  limit: 10000,
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html',
        }),
    ],

    devServer: {
        contentBase: path.join(__dirname, './dist'),
        host: 'localhost',
        port: port,
        open : true,
        hot : true,

    },
}