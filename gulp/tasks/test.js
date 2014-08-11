var gulp = require('gulp');
var jest = require('gulp-jest');

gulp.task('test', function () {
  return gulp.src('build/app.js')
    .pipe(jest({
      rootDir: __dirname + "/../../",
      scriptPreprocessor: "./test/helpers/preprocessor.js",
      unmockedModulePathPatterns: [
        "./node_modules/react"
      ],
      testDirectoryName: "test",
      testPathIgnorePatterns: [
        "./node_modules",
        "./test/helpers"
      ],
      moduleFileExtensions: [
        "js",
        "json",
        "react"
      ]
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      console.log(err);
      this.emit('end'); //instead of erroring the stream, end it
    });
});

gulp.task('autotest', function() {
  return gulp.watch(['src/js/**/*.js', 'test/spec/*.js'], ['test']);
});
