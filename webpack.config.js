module.exports = {
    entry: './src/Main.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        extensions: ['.js']
    },
    //devtool: 'source-map',
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: [['es2015', {'loose': false}], 'stage-1', 'react']
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]__[hash:base64:10]'
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    }
};
