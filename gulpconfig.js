module.exports = function() {
    var config = {
        browsers: ['last 3 versions', 'not ie < 10', 'safari >=5'],

        css: {
            inputMain: './_pcss/**/[^_]*.{css,pcss}',
            inputAll: './_pcss/**/*.{css,pcss}',
            excludeVendor: '!_pcss/vendor/**/*',
            output: './assets/',
            config: {
                atImport: { extensions: ['.css', '.pcss'], prefix: '_' },
                postcssPresetEnv: {
                    autoprefixer: false,
                    features: {
                        'nesting-rules': true,
                        'custom-media-queries': true
                    }
                },
                cssNano: { autoprefixer: false }
            }
        }
    };

    return config;
};
