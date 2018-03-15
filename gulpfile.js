const gulp = require('gulp');
const webserver = require('gulp-webserver');


gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true
    }));
});


gulp.task('default', ['webserver']);