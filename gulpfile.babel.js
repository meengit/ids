import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import eslint from 'gulp-eslint';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import cp from 'child_process';

const JS_PATH = './_js';

let jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
let messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task('lint', () => {
  return gulp.src([JS_PATH + '/**/*.js', '!' + JS_PATH + '/libs/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('babel', () => {
  return gulp.src([JS_PATH + '/libs/*.js', JS_PATH + '/*.js'])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015'],
      ignore: [
          JS_PATH + '/libs/*'
      ]
    }))
    .pipe(concat('scripts.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./js'));
});


gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn( jekyll , ['build', '--config', '_config.yml,_config_dev.yml'], {stdio: 'inherit'})
    .on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

gulp.task('browser-sync', ['babel', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

gulp.task('watch', function () {
  gulp.watch(JS_PATH + '/**/*.js', ['lint']);
  gulp.watch(JS_PATH + '/**/*.js', ['babel']);
  gulp.watch(['*.html', '_layouts/*.html', '_contents/*'], ['jekyll-rebuild']);
});

gulp.task('default', ['browser-sync', 'watch']);
