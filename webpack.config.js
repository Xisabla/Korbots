const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    // Use development by default: allow us to read the bundle easily
    mode: 'development',

    // File from which webpack will look for require/import (thus, client index.js file)
    entry: './src/index.js',

    context: path.resolve(__dirname),
    output: {
        // Put all the bundled files into /public/dist
        path: path.resolve(__dirname, 'public', 'dist'),
        // Bundle js files as /public/dist/js/app.js
        filename: 'js/app.js',
        // Tell to webpack that the server will have public/dist/ as /dist/ path
        //  see https://webpack.js.org/configuration/output/#outputpublicpath
        publicPath: '/dist/'
    },

    // Allows us to debug easily by telling us the line of the source to an error/warning from a bundle file
    //  see https://webpack.js.org/configuration/devtool/#special-cases
    devtool: 'cheap-module-eval-source-map',

    module: {
        rules: [
            // Force code linting before any actions
            //  see https://webpack.js.org/loaders/eslint-loader/
            //  see https://eslint.org/docs/user-guide/getting-started
            {
                test: /\.js$/i,
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            // Force automatic fixing (if possible)
                            fix: true,
                            // Means that if there are some warnings, it will be logged inside the client console while using dev-server
                            // TL;DR: useful while developing
                            emitWarning: true
                        }
                    }
                ],
                enforce: 'pre',
                include: [path.resolve(__dirname, 'src')]
            },

            // Run babel upon js/jsx files, allow React to work correctly and the usage of ES2015+ features
            //  see https://webpack.js.org/loaders/babel-loader/
            //  see https://babeljs.io/docs/en/
            {
                test: /\.(js|jsx)$/i,
                use: [{ loader: 'babel-loader' }]
            },

            // Loads css files and bundle them into a single css file
            //  see https://webpack.js.org/loaders/css-loader/
            //  see https://webpack.js.org/plugins/mini-css-extract-plugin/
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },

            // Loads sass files (css extension), compile them into css files, and, as above, bundle the css into a single file (merged with other sass/css)
            // The autoprefixer plugins adds prefix to some css tags to ensure the compatibility of the compiled css with older browser
            //  see https://webpack.js.org/loaders/sass-loader/
            //  see https://webpack.js.org/loaders/postcss-loader/ with https://autoprefixer.github.io/
            //  see https://sass-lang.com/documentation
            {
                test: /\.s[ac]ss$/i,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')]
                        }
                    },
                    { loader: 'sass-loader' }
                ]
            },

            // Allows imports/requires of font files, the result of the import/require is the path (from the publicPath) to the "bundled" file
            // As there is no real bundled here, the "bundled" file is just a copy from the source file, or the url (if it is not a local file)
            //  see https://webpack.js.org/loaders/file-loader/
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                use: [{ loader: 'file-loader' }]
            },

            // Allows imports/requires of image files; as above, the result of the import/requires is the path to the bundled file
            // If the file size is under the limit, there won't be any bundled file and the source file will be converted as a base64 string
            // Otherwise, as above, the "bundled" file is just a copy of the file to public/dist/img/
            //  see https://webpack.js.org/loaders/url-loader/
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'img/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        // Tells to the CssExtract (css and sass loaders) to bundle to public/dist/css/app.css
        new MiniCssExtractPlugin({
            filename: 'css/app.css'
        })
    ],

    performance: {
        // Remove hints performance as it just tells the the bundled files are heavy and we cannot really change this easily; we do know so don't tell us
        hints: false
    },

    // dev-server configuration (use with: `npm run serve-dev`)
    //  see https://webpack.js.org/configuration/dev-server/
    devServer: {
        // Locate the public folder
        contentBase: path.join(__dirname, 'public'),
        // Listen on http://localhost:3001
        port: 3000,
        // Watch changes from the public folder too (eg: index.html changes also needs to reload the server)
        watchContentBase: true
    }
}
