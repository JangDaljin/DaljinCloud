const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const port = process.env.PORT || 3000;

module.exports = {
    //모드 설정
    mode : 'production',

    //시작 경로
    entry: './src/index.tsx',

    //결과물
    output : {
        filename : 'bundle.[hash].js',
        path: __dirname + "/dist",
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
                use: [MiniCssExtractPlugin.loader, 'css-loader' , 'sass-loader'],
            },

            {
                test: /\.(ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './fonts'
                        }
                    },
                ]
            },

            {
                test: /\.(ico|png|jpe?g)$/,
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
                test: /\.(ico)$/,
                loader: 'url-loader',
                options: {
                  name: '[name].[ext]',
                  limit: 1000,
                  fallback: 'file-loader',
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
    ],
}