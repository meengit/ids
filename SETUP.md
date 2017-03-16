# Setup this Documentation

Create default directory structure (without `_posts` dir) and default files:
```bash
mkdir -p PROJECT_DIR/{_drafts,_includes,_layouts,_data,_sass,_site}
touch PROJECT_DIR/{_config.yml,_config_dev.yml,index.md,Gemfile,README.md}
```

This setup working with [*Jekyll Collections*][6] for its contents called *contents*. To enable this collection create a directory called `contents` and add it to `_config.yml` (please see bellow).

Add your `.eslintrc` and `.scss-lint.yml`settings to `PROJECT_DIR`. Then setup the `Gemfile`:
```ruby 
# ./Gemfile

source "https://rubygems.org"
ruby RUBY_VERSION

gem "jekyll", "3.4.1"
gem "susy", "2.2.12"

# Plugins
group :jekyll_plugins do
   gem "jekyll-compass","2.0.1"
end
```

To use *Jekyll* with development and production environment please read this background post on [stackoverflow.com][1] as introduction. With `_config.yml` and `_config_dev.yml` booth solutions on [stackoverflow.com][1] are available.

Production `_config.yml`: 
```yaml
# ./_config.yml

# Site settings

# {{ site.title }}
title: Adobe InDesign Scripting 

gems:
  - jekyll-compass

markdown: kramdown

# {{ site.email }}
email: ids@meen.ch

# {{ site.description }}
description: > 
  Adobe InDesign Scripting, Gemeinschaftsprojekt «Grafisches Forum Zürich» 
  und Berufsschule für Gestaltung Zürich medienformfarbe, entwickelt durch
  Andreas Eberhard, Jona.

github_username:  meengit
url: "https://meengit.github.io"
baseurl: "/ids"

collections:
  contents:
    output: true
```

Development `_config_dev.yml` (may optional):
```yaml
# ./_config_dev.yml

url: "https://localhost:4000"
baseurl: ""
```

## Jekyll plugins

This setup using the following plugins: [jekyll-compass][3] with [susy][4] as dependency.

The required *gems* are registered in the `Gemfile`. For installation run
```bash
bundle install 
```

in terminal. The configurations are located on the top in `_config.yml`.

`jekyll-compass` must be initialized first. Run:
```bash
compass create -r jekyll-compass --app=jekyll -r susy Path/PROJECT_DIR/
```

The output should be like this:
```text
directory _compass/
directory _site/css/
directory .compass/
   create .compass/config.rb
   create _compass/screen.scss
   create _compass/print.scss
   create _compass/ie.scss
    write _site/css/ie.css
    write _site/css/print.css
    write _site/css/screen.css

*********************************************************************
Congratulations! Your jekyll-compass project has been created.

Don't forget to add jekyll-compass to the list of gem plugins in _config.yml.

You may now add and edit Sass stylesheets in the _compass subdirectory of your project.

Sass files beginning with an underscore are called partials and won't be
compiled to CSS, but they can be imported into other sass stylesheets.

You can configure your project by editing the _data/compass.yml configuration file.

If you are using the jekyll new site template installed with `jekyll new` then
you may wish to move some of the files from _sass to _compass and then remove
this folder along with the css folder.

You must compile your Sass stylesheets into CSS when they change.
This can be done in one of the following ways:
  1. To compile on demand:
     compass compile (just compile your Sass)
     jekyll build (compile your entire website, including Sass)
  2. To monitor your project for changes and automatically recompile:
     compass watch (just watches your Sass)
     jekyll serve --watch (watch your entire website, including Sass)

More Resources:
  * Website: http://compass-style.org/
  * Sass: http://sass-lang.com
  * Community: http://groups.google.com/group/compass-users/
  * Jekyll: http://jekyllrb.com/
  * jekyll-compass: https://github.com/mscharley/jekyll-compass
```

To start up this setup in **development environment** run:
```bash
jekyll serve _config.yml,_config_dev.yml
```

## Troubleshooting:

**If your files in `_sass` folder not included wit `jekyll bild` or `serve`, move them to `_compass` directory and delete `_sass`. If you have some other issues, [Using susy with Jekyll][5] by [stackoverflow.com][5] may help.**

## Jekyll and ES6/ES2015

There are several ways to add *babel* support to a *Jekyll*-Project. In this case, two were tested:

  * [jekyll-babel][2] plugin;
  * *Gulp* task(s).

[jekyll-babel][2] plugin enables *babel* support as a part of *Jekylls*-Ecosystem. It has on big disadvantage: It requires *front matter* 
```text 
---
---
```

on the top of every file, that should converted. With that, *ESLint* runs in troubles and fails. Eg. in SublimeText, linting crashes. 

To use linting and ES6/2015, one solution is to implement *Gulp*. 

The `gulpfile.babel.js` is written in ES6/2015. To use ES6 in *Gulpfiles*, the following steps are required (instructions based on [Using ES6 with gulp](https://markgoodyear.com/2015/06/using-es6-with-gulp/)).

* Install *Gulp-Cli*: `npm install -g gulp-cli`
* Init *npm* project: `npm init`
* Install local *Gulp*: `npm install gulp --save-dev`
* Install local *babel* and *babel preset 2015*: `npm install babel-core babel-preset-es2015 --save-dev`
* Create *babel config file*: `touch .babelrc`
* Create *gulp-babel file*: `touch gulpfile.babel.js` 

Note: To tell Gulp that we want to use Babel we should use the `gulpfile.babel.js` name instead.

Add *babel config* to `.babelrc`:
```javascript
{
  "presets": ["es2015"]
}
```

Then create your grunt tasks:
```javascript
// gulpfile.babel.js

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

/**
 * Lint all files in _js except files in libs.
 */
gulp.task('lint', () => {
  // ESLint ignores files with "libs" paths.
  // So, it's best to have gulp ignore the directory as well.
  // Also, Be sure to return the stream from the task;
  // Otherwise, the task may end before the stream has finished.
  return gulp.src([JS_PATH + '/**/*.js', '!' + JS_PATH + '/libs/**'])
    // eslint() attaches the lint output to the "eslint" property
    // of the file object so it can be used by other modules.
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe(eslint.failAfterError());
});

/**
 * Compile js files in _js except files in libs but concat all files in _js with babel output. 
 * Important: In watch command, this task must be loaded before jekyll tasks.
 */
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

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn( jekyll , ['build', '--config', '_config.yml,_config_dev.yml'], {stdio: 'inherit'})
    .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['babel', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch(JS_PATH + '/**/*.js', ['lint']);
  gulp.watch(JS_PATH + '/**/*.js', ['babel']);
  gulp.watch(['*.html', '_layouts/*.html', '_contents/*'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
```

Additional contents for this *Gulpfile*:

* [gulp babel with sourcemaps][11]
* [gulp-babel ignore files][7]
* [multiple arguments with spawn][8]
* [gulp-eslint][9]
* [gulp, jekyll & browser-sync][10]



[11]:https://www.npmjs.com/package/gulp-babel
[10]:https://github.com/shakyShane/jekyll-gulp-sass-browser-sync/blob/master/gulpfile.js
[9]:https://github.com/adametry/gulp-eslint
[8]:http://stackoverflow.com/questions/12778596/spawning-process-with-arguments-in-node-js
[7]:http://stackoverflow.com/questions/32413440/transpiling-nodejs-app-with-gulp-babel-ignore-doesnt-work
[6]:https://jekyllrb.com/docs/collections/
[5]:http://stackoverflow.com/questions/25526756/using-susy-with-jekyll
[4]:http://susydocs.oddbird.net/en/latest/
[3]:https://github.com/chikamichi/jekyll-compass
[2]:https://github.com/babel/jekyll-babel
[1]:http://stackoverflow.com/questions/27386169/change-site-url-to-localhost-during-jekyll-local-development




https://fonts.google.com/specimen/Dosis?selection.family=Dosis:400,500,600
https://fonts.google.com/specimen/Open+Sans?selection.family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i
http://dan.doezema.com/2014/01/setting-up-livereload-with-jekyll/
