import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import eslint from 'gulp-eslint';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';
import cp from 'child_process';


import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import merge from 'utils-merge';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import gutil from 'gulp-util';
import chalk from 'chalk';

const JS_PATH = './_js';

let jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
let messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task('lint', () => {
  return gulp.src([JS_PATH + '/**/*.js', '!' + JS_PATH + '/libs/**'])
    .pipe(eslint())
    .on('error', map_error)
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

gulp.task('concat', () => {
  return gulp.src([JS_PATH + '/libs/*.js', 'js/*.min.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./js'));
});

gulp.task('watchify', function () {
  let args = merge(watchify.args, { debug: true })
  let bundler = watchify(browserify(JS_PATH + '/main.js', args)).transform(babelify, { /* opts */ })
  bundle_js(bundler)

  bundler.on('update', function () {
    bundle_js(bundler)
  })
})

/* nicer browserify errors */
function map_error(err) {
  if (err.fileName) {
    // regular error
    gutil.log(chalk.red(err.name)
      + ': '
      + chalk.yellow(err.fileName.replace(__dirname + JS_PATH, ''))
      + ': '
      + 'Line '
      + chalk.magenta(err.lineNumber)
      + ' & '
      + 'Column '
      + chalk.magenta(err.columnNumber || err.column)
      + ': '
      + chalk.blue(err.description))
  } else {
    // browserify error..
    gutil.log(chalk.red(err.name)
      + ': '
      + chalk.yellow(err.message))
  }

}

function bundle_js(bundler) {
  return bundler.bundle()
    .on('error', map_error)
    .pipe(source('scripts.js'))
    .pipe(buffer())
    .pipe(gulp.dest('js/'))
    .pipe(rename('scripts.min.js'))
    .pipe(sourcemaps.init({ loadMaps: true }))
      // capture sourcemaps from transforms
     .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('js'))
}

gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn( jekyll , ['build', '--config', '_config.yml,_config_dev.yml', /*'--watch'*/], {stdio: 'inherit'})
    .on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

gulp.task('browser-sync', ['jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

gulp.task('watch', function () {
  gulp.watch(JS_PATH + '/**/*.js', ['watchify', 'jekyll-rebuild', 'lint']);
  gulp.watch(['*.html', '_layouts/*.html', '_contents/*', '_compass/*'], ['jekyll-rebuild']);
});

gulp.task('default', ['watchify', 'browser-sync', 'watch']);
