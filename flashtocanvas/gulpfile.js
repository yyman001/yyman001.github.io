var gulp        = require('gulp');
var commonjs    = require('rollup-plugin-commonjs'); //CommonJS 模块转换为 ES6
var nodeResolve = require('rollup-plugin-node-resolve'),
  rollup = require('rollup'),
 // rollupTypescript = require('rollup-plugin-typescript'); //TS
  babel = require('rollup-plugin-babel'),
  json = require('rollup-plugin-json'),
 replace = require('rollup-plugin-replace');

const IN_FILE_NAME = 'main.js';
const OUT_FILE_NAME = './dist/gulp_out_es5.js';

gulp.task('build', function () {
  return rollup.rollup({
    entry: IN_FILE_NAME,
    plugins: [
     json(),
      nodeResolve(),
      commonjs(),
      // rollupTypescript(),
      babel({
        exclude: 'node_modules/**'
      })
      ,replace({ exclude: 'node_modules/**', ENV: JSON.stringify(process.env.NODE_ENV || 'development'), })
    ],
  })
    .then(function (bundle) {
      bundle.write({
        format: "umd",
        moduleName: "library",
        dest: OUT_FILE_NAME,
        sourceMap: true
      });
    })
});

//  gulp build 编译

gulp.task('watch',function(){
  gulp.watch(IN_FILE_NAME, ['build']).on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});

