import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.ts',
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
      sourcemap: true
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'SlimViewer',
      sourcemap: true,
      globals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'antd': 'antd',
        'react-router-dom': 'ReactRouterDOM'
      }
    }
  ],
  plugins: [
    peerDepsExternal(),
    replace({
      'process.env.NODE_ENV': '"production"',
      'process.env.NODE_ENV === \'development\'': 'false',
      'process.env.NODE_ENV === "development"': 'false',
      'process.env.NODE_ENV === \'production\'': 'true',
      'process.env.NODE_ENV === "production"': 'true',
      'process.env.PUBLIC_URL': '""',
      'process.env': '{}',
      preventAssignment: true
    }),
    resolve({
      browser: true,
      preferBuiltins: false
    }),
    commonjs(),
    json(),
    typescript({
      tsconfig: './tsconfig.lib.json',
      declaration: true,
      declarationDir: './dist'
    }),
    postcss({
      extract: true,
      minimize: true
    }),
    copy({
      targets: [
        {
          src: 'node_modules/dicom-microscopy-viewer/dist/dynamic-import/*',
          dest: 'dist/static/js'
        },
        {
          src: 'node_modules/dicom-microscopy-viewer/dist/dynamic-import/*',
          dest: 'dist'
        }
      ]
    }),
    terser()
  ],
  external: ['react', 'react-dom', 'antd', '@ant-design/icons', 'react-router-dom', 'dicomweb-client', 'dcmjs', 'oidc-client', 'ol']
};
