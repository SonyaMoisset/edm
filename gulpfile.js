var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('demo.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
});

gulp.task('autoprefixer', function () {
  return gulp.src('/*.css')
    .pipe(autoprefixer({
      browsers: ['> 1%'],
      cascade: false
    }))
    .pipe(gulp.dest('/'));
});

gulp.task('default', ['sass', 'autoprefixer']);
