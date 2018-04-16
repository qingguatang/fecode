const pathUtil = require('path');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();


gulp.task('webserver', function() {
  return gulp.src('./app')
    .pipe($.webserver({
      livereload: true,
      // open: true,
      directoryListing: {
        enable:true,
        path: 'app'
      }
    }));
});


gulp.task('less', function () {
  return gulp.src('./app/**/*.less')
    .pipe($.plumber({
      errorHandler (err) {
        // $.notify.onError('Error: <%= error.message %>')(err);
        console.error(err);
        this.emit('end');
      }
    }))
    .pipe($.sourcemaps.init())
    .pipe($.lessDev({
      env: 'development'
    }))
    .pipe($.autoprefixer('last 10 versions', 'ie 9'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./app'))
});


gulp.task('watch', function() {
  gulp.watch('app/**/*.less', ['less']);
});

gulp.task('default', ['webserver', 'watch', 'less']);
