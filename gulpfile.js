var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    jasmine = require('gulp-jasmine'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

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
        .pipe(uglify())
        .pipe(rename('roman.min.js'))
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['lint', 'test']);
