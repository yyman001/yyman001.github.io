// rollup.config.js
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
//import rollupTypescript from 'rollup-plugin-typescript'; //typescript 插件
//如果未使用上面的插件 会 提示 'default' is imported from external module 'rollup-plugin-typescript' but never used
import replace from 'rollup-plugin-replace';

const IN_FILE_NAME = 'rCanvas.js';
const OUT_FILE_NAME = './dist/rCanvas.js';

export default {
  entry: IN_FILE_NAME,
  format: 'umd',
  moduleName: "rCanvas",
  plugins: [ 
    json(),
    // rollupTypescript(),
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    replace({ exclude: 'node_modules/**', ENV: JSON.stringify(process.env.NODE_ENV || 'development'), })
  ],
  dest: OUT_FILE_NAME
};

// => npm run build 编译
// => npm run watch 监听文件变化编译