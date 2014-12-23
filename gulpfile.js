var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    jasmine = require('gulp-jasmine'),
    uglify = require('gulp-uglifyjs');

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

gulp.task('compress', function() {
    return gulp.src('roman.js')
        .pipe(uglify('roman.min.js', {
            outSourceMap: true,
            sourceRoot: './'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['lint', 'test']);
