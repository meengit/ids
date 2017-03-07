'use strict';

import gulp from 'gulp';

import childProcess from 'child_process';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import eslint from 'gulp-eslint';

const spawn = childProcess.spawn;

gulp.task('scripts', () =>
    gulp.src('js/_dev/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('js'))
);

gulp.task('lint', function () {
    return gulp.src(['js/dev/*.js'])
        .pipe(eslint('/.eslintrc'))
        .pipe(eslint.format());
});

gulp.task('jekyll', function (){
  const jekyll = spawn('jekyll', ['serve'], {
    stdio: 'inherit'
  });
});

gulp.task('watch', () => {
  gulp.watch('js/_dev/*.js', ['lint','scripts']);
});

gulp.task('run',['jekyll', 'watch']);
