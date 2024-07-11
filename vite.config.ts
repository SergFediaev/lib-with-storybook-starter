import { resolve } from 'path'

import { defineConfig } from 'vite'

import { dependencies, devDependencies } from './package.json'
// ...Object.keys(peerDependencies)

// https://vitejs.dev/config/
export default defineConfig({
  // vite.config.js
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      // the proper extensions will be added
      fileName: 'index',
      formats: ['es'],
      name: 'lib-starter',
    },
    rollupOptions: {
      external: [
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
        'react/jsx-runtime',
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        // globals: {
        //   vue: 'Vue',
        // },
      },
    },
    sourcemap: true,
    target: 'esnext',
  },
})
