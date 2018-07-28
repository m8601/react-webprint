var gulp = require('gulp');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var del = require('del');
var zip = require('gulp-zip');
var wait = require('gulp-wait');
//Images compressoion
var imagemin = require('gulp-imagemin');
var imageminPng = require('imagemin-pngquant');
var imageminJpeg = require('imagemin-jpeg-recompress');

//FILES PATHS 
var SCRIPTS_PATH = 'public/js/**/*.js';
var SCSS_PATH = 'public/scss/**/*.scss';
var DIST_PATH = 'public/dist';
var IMAGES_PATH = 'public/images/**/*.{png,jpeg,jpg,gif,svg}';

//TASKS
//CSS ScSS
gulp.task('styles', function () {
  console.log('starting styles task');
  return gulp.src(SCSS_PATH)
    .pipe(wait(500))
    .pipe(plumber(function (err) {
      console.log('Styles task error');
      console.log(err);
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());
});

//SCRIPTS
gulp.task('scripts', function () {
  console.log('starting scripts task');

  return gulp.src(SCRIPTS_PATH)
    .pipe(plumber(function (err) {
      console.log('Scripts Task Error');
      console.log(err);
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());
});

//IMAGES
gulp.task('images', function () {
  return gulp.src(IMAGES_PATH)
    .pipe(imagemin([
      imagemin.gifsicle(),
      imagemin.jpegtran(),
      imagemin.optipng(),
      imagemin.svgo(),
      imageminPng(),
      imageminJpeg()
    ]))
    .pipe(gulp.dest(DIST_PATH + '/images'));
});

//DELEATE DIST
gulp.task('clean', function () {
  return del.sync([
    DIST_PATH
  ]);
});

//ZIP DIST 
gulp.task('export', function () {
  return gulp.src('public/**/*')
    .pipe(zip('website.zip'))
    .pipe(gulp.dest('./'))
});

gulp.task('reload', function () {
  return gulp.src('public/index.html')
    .pipe(livereload());
});


gulp.task('default', ['clean', 'scripts', 'images', 'styles'], function () {
  console.log('Starting default task');
});

gulp.task('watch', ['default'], function () {
  console.log('Starting watch task');
  require('./server.js');
  livereload.listen();
  gulp.watch(SCRIPTS_PATH, ['scripts']);
  gulp.watch(SCSS_PATH, ['styles']);
  gulp.watch('public/index.html', ['reload']);
});