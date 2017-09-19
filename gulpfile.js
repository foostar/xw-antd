let gulp = require('gulp');

gulp.task('copy:less', (done) => {
  gulp.src([ 'src/**/*.less' ]).pipe(gulp.dest('./')).on('end', done);
});

// //发布
gulp.task('default', [ 'copy:less' ]);