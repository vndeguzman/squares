let path = require("path")
let webpack = require('webpack')
let BundleTracker = require('webpack-bundle-tracker')

module.exports = {
    context: path.resolve(),

    entry: {
        vendor: [
            'angular',
            'angular-animate',
            'angular-aria',
            'angular-cookies',
            'angular-material',
            'angular-messages',
            'angular-route',
            'angular-sanitize',
            'angular-touch',
            'lodash',
            'moment'
        ],
        app: [
            './static/js/app.js'
        ]
    },

    output: {
        path: path.join(__dirname, 'static/bundles/'),
        publicPath: '/static/bundles/',
        filename: '[name].bundle.js',
    },

    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: { warnings: false }
        // })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                include: __dirname + '/static/js',
                query: {presets: ['es2015']},
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ],
            },
            {
                test: /\.useable\.css$/,
                use: [
                    {
                        loader: 'style-loader/useable'
                    },
                    { loader: 'css-loader' },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                            removeComments: true,
                            collapseWhitespace: true
                        }
                    }
                ],
            },
        ]
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js']
    },
}