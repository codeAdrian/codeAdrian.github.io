var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var stripCssComments = require('gulp-strip-css-comments');
const autoprefixer = require('gulp-autoprefixer');

// Css paths
var cssInput = '../scss/**/*.scss';
var cssOutput = '../css';

// script paths
var jsSkinInput = '../js/_dev-files/**/*.js';
var jsSkinOutput = '../js/';

// Js min task
gulp.task('skin-scripts', function () {
    return gulp.src(jsSkinInput)
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(jsSkinOutput));
});

// Sass task
gulp.task('sass', function () {
    return gulp.src(cssInput)
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compressed'
        })).pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(stripCssComments())
        .pipe(gulp.dest(cssOutput))
});

// Sass file watcher
gulp.task('sass-watch', function () {
    return gulp
        .watch([cssInput, cssOutput], ['sass'])
        // When there is a change, log a message in the console
        .on('change', function (event) {
            console.log('Css File ' + event.path + ' was ' + event.type + ', running tasks...');
        })
});

// Js file watcher
gulp.task('skin-scripts-watch', function () {
    return gulp
    // Watch the js input folder for change
        .watch([jsSkinInput, jsSkinOutput], ['skin-scripts'])
        // log a message in the console
        .on('change', function (event) {
            console.log('Js File ' + event.path + ' was ' + event.type + ', running tasks...');
        });
});

// Default task - type in console 'gulp default'
gulp.task('default', ['skin-scripts', 'skin-scripts-watch', 'sass', 'sass-watch']);