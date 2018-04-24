const gulp = require('gulp');
const $ = require('gulp-load-plugins')();


gulp.task('webserver', () => {
  return gulp.src('.')
    .pipe($.webserver({
      livereload: true,
      open: true,
      directoryListing: {
        enable:true,
        path: '.'
      }
    }));
});


gulp.task('less', () => {
  return gulp.src('./app/**/*.less')
    .pipe(errorHandler())
    .pipe($.cached('less'))
    .pipe($.sourcemaps.init())
    .pipe($.lessDev())
    .pipe($.autoprefixer('last 10 versions', 'ie 9'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./app'));
});


gulp.task('js', () => {
  gulp.src('app/**/*.js')
    .pipe(errorHandler())
    .pipe($.cached('js'))
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      presets: ['babel-preset-env']
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./dist'))
});


gulp.task('watch', () => {
  gulp.watch('app/**/*.less', ['less']);
  gulp.watch('app/**/*.js', ['js']);
});


function errorHandler() {
  return $.plumber({
    errorHandler(err) {
      //$.notify.onError('Error: <%= error.message %>')(err);
      this.emit('end');
    }
  });
}


gulp.task('default', ['webserver', 'watch', 'less']);