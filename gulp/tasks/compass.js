var compass      = require('gulp-compass');
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var handleErrors = require('../util/handleErrors');

gulp.task('compass', function() {
  return gulp.src('./src/sass/*.scss')
    .pipe(plumber())
    .pipe(compass({
      config_file: 'compass.rb',
      css: 'build',
      sass: 'src/sass'
    }))
    .on('error', handleErrors);
});
