const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

const entry = {
    'script': './src/js/index.js',
    'style': './src/scss/style.scss',
};

module.exports = {
    ...defaultConfig,
    entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    plugins: [
        ...defaultConfig.plugins,
        {
            apply(compiler) {
                compiler.hooks.done.tap('DonePlugin', (stats) => {
                    stats.compilation.assetsInfo.forEach((value, key)=>console.log(key + " compilé"))
                });
            },
        },
    ],
    stats: {
        all: false,
        assets: false,
        errors: true,
        warnings: true,
    },
};
