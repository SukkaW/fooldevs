import fs from 'node:fs';
import path from 'node:path';

import { swc } from 'rollup-plugin-swc3';
import { dts } from 'rollup-plugin-dts';
import { oxcResolve } from 'rollup-plugin-oxc-resolve';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';

import { defineConfig } from 'rollup';
import isCI from 'is-ci';

import pkgJson from './package.json';

const externalModules = (('dependencies' in pkgJson && pkgJson.dependencies && typeof pkgJson.dependencies === 'object')
  ? Object.keys(pkgJson.dependencies)
  : []).concat([
  'react'
]);

export default defineConfig(() => {
  const external = (mod: string) => {
    if (mod.startsWith('node:')) return true;
    if (externalModules.includes(mod)) return true;
    return externalModules.some((m) => mod.startsWith(`${m}/`));
  };

  const distDir = path.resolve('./dist');
  if (isCI && fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
    fs.mkdirSync(distDir);
  }

  return [
    defineConfig({
      input: {
        index: 'src/index.ts',
        react: 'src/react.ts'
      },
      output: [
        { dir: 'dist', entryFileNames: '[name].cjs', format: 'cjs', sourcemap: false, compact: true },
        { dir: 'dist', entryFileNames: '[name].mjs', format: 'esm', sourcemap: false, compact: true }
      ],
      plugins: [
        oxcResolve(),
        json({
          compact: true,
          preferConst: true
        }),
        replace({
          preventAssignment: true,
          'process.env.NODE_ENV': JSON.stringify('production'),
          'process.env.LATEST_VERSION_SCRIPT': JSON.stringify('false')
        }),
        swc({
          isModule: true,
          minify: true,
          jsc: {
            minify: {
              compress: {
                passes: 3,
                const_to_let: false
              },
              mangle: {},
              module: true,
              keep_fnames: false
            }
          }
        })
      ],
      external
    }),
    defineConfig({
      input: {
        index: 'src/index.ts',
        react: 'src/react.ts'
      },
      output: { dir: 'dist', entryFileNames: '[name].d.ts' },
      plugins: [
        dts({ respectExternal: true })
      ],
      external
    })
  ];
});
