const path = require('path')

module.exports = {
    mode: 'development',

    entry: './src/index.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
        filename: 'app.js',
        publicPath: '/public/dist/'
    },

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
                use: ['style-loader', 'css-loader']
            },
            {
                // It could be nice to use sass variables feature (variables inside css)
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3000,
        watchContentBase: true
    }
}
