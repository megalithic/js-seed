var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('react', function () {
    return gulp.src('src/**/.jsx')
        .pipe(react())
        .pipe(gulp.dest('build'));
});
