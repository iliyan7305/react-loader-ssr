// const ExtractCssChunks = 

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            ['es2015', { modules: false}],
                            'react',
                        ],
                        plugins: [
                            'syntax-dynamic-import',
                            'transform-class-properties',
                            'transform-object-assign',
                            'react-loadable/babel'
                        ]
                    }
                }
            }
        ]
    }
}