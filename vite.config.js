import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import safeParser from 'postcss-safe-parser'

import { fileURLToPath } from 'url';
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    hmr: true
  },
  resolve: {
    alias: {
      '@': '/src',
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@content': path.resolve(__dirname, 'src/content'),
      '@demo': path.resolve(__dirname, 'src/demo'),
      '@tailwind': path.resolve(__dirname, 'src/tailwind'),
    },
  },
  css: {
    postcss: {
      parser: safeParser
    }
  },
  assetsInclude: ['**/*.glb', '**/*.mp4', '**/*.webm', '**/*.mov']
})
