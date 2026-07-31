const gulp = require('gulp');
const gulpSass = require('gulp-sass')(require('sass'));

const paths = {
  scss: {
    source: 'scss/style.scss',
    watch: 'scss/**/*.scss',
    destination: 'css',
  },
};

function styles() {
  return gulp
    .src(paths.scss.source)
    .pipe(
      gulpSass({
        outputStyle: 'expanded',
      }).on('error', gulpSass.logError)
    )
    .pipe(gulp.dest(paths.scss.destination));
}

function watchFiles() {
  gulp.watch(paths.scss.watch, styles);
}

exports.styles = styles;
exports.watch = gulp.series(styles, watchFiles);
exports.default = gulp.series(styles, watchFiles);
