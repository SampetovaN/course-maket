'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sourcemap = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();
var del = require('del');
var svgstore = require('gulp-svgstore');
var imagemin = require('gulp-imagemin');
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var webp = require('gulp-webp');
var htmlValidator = require('gulp-w3c-html-validator');
var bemValidator = require('gulp-html-bem-validator');
const pug = require('gulp-pug');
const cached = require('gulp-cached');

gulp.task('clean', function () {
  return del('build');
});

gulp.task('pugToHtml', function () {
  return gulp.src('source/pug/pages/*.pug')
    .pipe(plumber())
    .pipe(pug({pretty: true}))
    .pipe(cached('pug'))
    .pipe(gulp.dest('build'));
});

gulp.task('images', function () {
  return gulp.src('source/img/**/*.{png,jpg,svg}')
    .pipe(imagemin([imagemin.optipng({optimizationLevel: 3}),
      imagemin.mozjpeg({progressive: true}),
      imagemin.svgo()]))
    .pipe(gulp.dest('source/img'));
});

gulp.task('sprite', function () {
  return gulp.src('source/img/sprite-*.svg')
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/img'));
});

gulp.task('webp', function () {
  return gulp.src(['source/img/*.{png,jpg}', '!source/img/bg-*.{png,jpg}'])
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest('source/img'));
});

gulp.task('copy', function () {
  return gulp.src([
    'source/fonts/**/*.{woff,woff2}',
    'source/img/**',
    '!source/img/sprite-*.svg',
  ], {
    base: 'source',
  })
    .pipe(gulp.dest('build'));
});

gulp.task('css', function () {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer(),
    ]))
    .pipe(gulp.dest('build/css'))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('build/css'))
    .pipe(server.stream());
});


gulp.task('server', function () {
  server.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });
  gulp.watch('source/pug/**/*.pug', gulp.series('pugToHtml', 'refresh'));
  gulp.watch('source/sass/**/*.scss', gulp.series('css'));
  gulp.watch('source/img/**/*.svg', gulp.series('sprite', 'pugToHtml', 'refresh'));
});

gulp.task('refresh', function (done) {
  server.reload();
  done();
});

gulp.task('htmlValidate', function () {
  return gulp.src('build/*.html')
    .pipe(htmlValidator({skipWarnings: true}))
    .pipe(htmlValidator.reporter())
    .pipe(bemValidator());
});

gulp.task('build', gulp.series('clean', 'sprite', 'copy', 'css', 'pugToHtml'));
gulp.task('image', gulp.series('images', 'webp'));
gulp.task('start', gulp.series('build', 'server'));
