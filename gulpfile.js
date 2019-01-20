var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({ lazy: true }),
    cssnano = require('cssnano'),
    mqpacker = require("css-mqpacker");
    atImport = require('postcss-easy-import'),
    lost = require('lost'),
    mixins = require('postcss-mixins'),
    postcssPresetEnv = require('postcss-preset-env');
autoprefixer = require('autoprefixer');

var config = require('./gulpconfig.js')();

function log(msg) {
    if (typeof msg === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}

var cssLint = function() {
    return gulp.src([config.css.inputAll, config.css.excludeVendor]).pipe(
        $.stylelint({
            reporters: [{ formatter: 'string', console: true }]
        })
    );
};

gulp.task('css:lint', cssLint);

var cssCompile = function() {
    var plugins = [
        atImport(config.css.config.atImport),
        mixins,
        postcssPresetEnv(config.css.config.postcssPresetEnv),
        lost,
        autoprefixer(config.browsers),
        mqpacker(),
        cssnano(config.css.config.cssNano)
    ];
    return gulp
        .src(config.css.inputMain)
        .pipe($.postcss(plugins))
        .pipe(
            $.rename({
                extname: '.css'
            })
        )
        .pipe(gulp.dest(config.css.output));
};

gulp.task('css:compile', gulp.series(gulp.parallel('css:lint'), cssCompile));

var cssWatch = function() {
    return gulp
        .watch([config.css.inputAll], gulp.series('css:compile'))
        .on('change', function(event) {
            log(
                'PostCSS file ' +
                    event.path +
                    ' was ' +
                    event.type +
                    '. Compiling CSS...'
            );
        });
};

gulp.task('default', gulp.series(gulp.parallel('css:compile'), cssWatch));
