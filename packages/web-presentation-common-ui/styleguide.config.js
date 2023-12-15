const excludePattern = /node_modules(?!(\/|\\)@efr).*/;

module.exports = {
    require: [
        'whatwg-fetch',
        'babel-polyfill'
    ],
    components: 'src/**/[A-Z]*.jsx',
    skipComponentsWithoutExample: true,
    webpackConfig: {
        module: {
            loaders: [
                {
                    enforce: 'pre',
                    test: /\.(js|jsx)$/,
                    exclude: excludePattern,
                    loader: 'eslint-loader'
                },
                // Babel loader, will use your project’s .babelrc
                {
                    test: /\.jsx?$/,
                    exclude: excludePattern,
                    loader: 'babel-loader'
                },
                // Other loaders that are needed for your components
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader'
                },
                {
                    test: /\.(jpg|png|gif|svg)$/,
                    loader: 'file-loader'
                }
            ]
        }
    }
};