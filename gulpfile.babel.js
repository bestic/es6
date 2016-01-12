import gulp from 'gulp';
import babel from 'gulp-babel';
import gulpSourcemaps from 'gulp-sourcemaps';


gulp.task('js', () => {

  gulp.src('src/**/*.js')
    .pipe(gulpSourcemaps.init())
    .pipe(babel())
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('dist'));

});

gulp.task('default', () => {

  gulp.run('js');

  gulp.watch('src/**/*.js', () => {
    gulp.run('js');
  });

});