import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import {fileURLToPath, URL} from 'node:url'

// If you rely on ts/jsconfig "paths", add vite-tsconfig-paths plugin (see below)
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss({ config: './config/tailwind.config.ts' }),
        autoprefixer()
      ]
    }
  },
  resolve: {
    alias: { '@': fileURLToPath(new URL('./', import.meta.url)) }
  },
  server: {
    // if you used CRA's "proxy" field, replicate it here:
    // proxy: { '/api': { target: 'http://localhost:3001', changeOrigin: true } }
  }
})
