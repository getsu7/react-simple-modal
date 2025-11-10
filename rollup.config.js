import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
      exports: 'named'
    }
  ],
  external: ['react', 'react-dom'],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx']
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: [
        ['@babel/preset-env', { modules: false }],
        ['@babel/preset-react', { runtime: 'automatic' }]
      ]
    }),
    commonjs(),
    postcss({
      extract: false,
      modules: false,
      inject: true,
      minimize: true
    }),
    terser(),
    copy({
      targets: [
        { src: 'src/*.d.ts', dest: 'dist' }
      ]
    })
  ]
};

