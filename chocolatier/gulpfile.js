'use strict';
const { src, dest, parallel, series, watch } = require('gulp');
const del = require('del');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const cssoptions = {
  'level': {
    2: {
      'mergeMedia': true
    }
  }
};

const styleSource = 'enter';

function deleteStyles() {
  return del('build/css/*')
}

function styles() {
  return src(['src/css/fonts-nav-footer.css', 'src/css/' + styleSource + '.css', 'src/css/' + styleSource + '-responsive.css'])
  .pipe(concat(styleSource + '-min.css'))
  .pipe(autoprefixer())
  .pipe(cleancss(cssoptions))
  .pipe(dest('build/css/'))
}

function homeStyle() {
  return src(['src/css/fonts-nav-footer.css', 'src/css/main.css', 'src/css/responsive.css'])
  .pipe(concat('home-min.css'))
  .pipe(autoprefixer())
  .pipe(cleancss(cssoptions))
  .pipe(dest('build/css/'))
}

function homeScripts() {
  return src('src/js/nav.js')
  .pipe(uglify())
  .pipe(dest('build/js/'))
}
function orderScripts() {
  return src(['src/js/nav.js', 'src/js/order.js', 'src/js/toenter.js'])
  .pipe(concat('order-min.js'))
  .pipe(uglify())
  .pipe(dest('build/js/'))
}
function menuScripts() {
  return src(['src/js/nav.js', 'src/js/menu.js'])
  .pipe(concat('menu-min.js'))
  .pipe(uglify())
  .pipe(dest('build/js/'))
}
function enterScripts() {
  return src(['src/js/nav.js', 'src/js/enter.js'])
  .pipe(concat('enter-min.js'))
  .pipe(uglify())
  .pipe(dest('build/js/'))
}

exports.deleteStyles = deleteStyles;
exports.styles = styles;
exports.homeStyle = homeStyle;

exports.homeScripts = homeScripts;
exports.orderScripts = orderScripts;
exports.menuScripts = menuScripts;
exports.enterScripts = enterScripts;
exports.stylesBuild = series(deleteStyles, styles, homeStyle);
exports.scriptsBuild = series(homeScripts, orderScripts, menuScripts, enterScripts);
