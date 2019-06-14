var gulp   = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

function JS() {
    return gulp.src('src/getDecimal.js')
        .pipe(gulp.dest('dist'));
}

function minJS() {
    return gulp.src('src/getDecimal.js')
        .pipe(uglify())
        .pipe(rename('getDecimal.min.js'))
        .pipe(gulp.dest('dist'));
}

gulp.task('build', gulp.series(JS, minJS));