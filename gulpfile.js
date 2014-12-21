var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    jasmine = require('gulp-jasmine');

gulp.task('lint', function() {
    return gulp.src(['roman.js', 'test/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('test', function() {
    return gulp.src('test/*.js')
        .pipe(jasmine());
});

gulp.task('default', ['lint', 'test']);
