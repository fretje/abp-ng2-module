import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const globals = {
  '@angular/core': 'ng.core',
  '@angular/http': 'ng.http',
  'rxjs/Observable': 'Rx',
  'rxjs/ReplaySubject': 'Rx',
  'rxjs/add/operator/map': 'Rx.Observable.prototype',
  'rxjs/add/operator/catch': 'Rx.Observable.prototype'
};

export default {
  input: 'dist/index.js',
  sourceMap: false,
  name: 'ng.abpModule',
  output: {
    file: 'dist/bundles/abp-ng2-module.umd.js',
    format: 'umd',
  },
  globals: globals,
  external: Object.keys(globals),
  plugins: [
    nodeResolve(),
    commonjs({include: 'node_modules/**'})
  ]
}
