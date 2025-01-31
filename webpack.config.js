const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

const entry = {
    'script': './src/js/index.js', // Point d'entrée pour le script JS
    'style': './src/scss/front/style.scss', // Point d'entrée pour le style frontend
    'back-style': './src/scss/back/style.scss' // Point d'entrée pour le style back-office
};

module.exports = {
    ...defaultConfig, // Utilise la configuration par défaut de WordPress Scripts
    entry,
    output: {
        path: path.resolve(__dirname, 'dist'), // Dossier de sortie pour les fichiers compilés
        filename: '[name].js', // Génére les fichiers JS avec le même nom que les entrées
    },
    plugins: [
        ...defaultConfig.plugins,
        {
            apply(compiler) {
                compiler.hooks.done.tap('DonePlugin', (stats) => {
                    // Affiche un message après la compilation de chaque fichier
                    stats.compilation.assetsInfo.forEach((value, key) => console.log(key + " compilé"))
                });
            },
        },
    ],
    stats: {
        all: false,
        assets: false,
        errors: true, // Affiche les erreurs
        warnings: true, // Affiche les avertissements
    },
};
