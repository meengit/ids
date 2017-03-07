# Setup this Documentation

## Gulp

The *Gulp*-Setup based on [Using ES6 with gulp](https://markgoodyear.com/2015/06/using-es6-with-gulp/).

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
