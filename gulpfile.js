var gulp = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('lint', function() {
    return gulp.src(['roman.js', 'test/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('default', ['lint']);
