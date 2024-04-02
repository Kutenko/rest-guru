const { src, dest, watch, parallel } = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const webpack = require('webpack-stream');

function html() {
  return src('src/*.pug')
    .pipe(pug({ pretty: '\t' }))
    .pipe(dest('dist/'));
}

function css() {
  return src('src/scss/*.scss')
    .pipe(sass())
    .pipe(dest('dist/css'));
}

function js() {
  return src('src/js/main.js')
    .pipe(webpack({
      mode: 'development',
      output: {
        filename: 'main.js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      }
    }))
    .pipe(dest('dist/js'));
}

function watchFiles() {
  watch('src/**/*.pug', html);
  watch('src/**/*.scss', css);
  watch('src/js/*.js', js);
}

exports.watch = watchFiles;
exports.default = parallel(watchFiles);
