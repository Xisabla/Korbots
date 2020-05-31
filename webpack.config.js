const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',

    entry: './src/index.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
        filename: 'js/app.js',
        publicPath: '/dist/'
    },

    devtool: 'cheap-module-eval-source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [path.resolve(__dirname, 'src')],
                options: {
                    fix: true,
                    emitWarning: true
                }
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/app.css'
        })
    ],

    performance: {
        hints: false
    },

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3000,
        watchContentBase: true
    }
}
