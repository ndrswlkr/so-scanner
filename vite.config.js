import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  base: 'so-scanner',
  build:{
    target: 'esnext',
    outDir: 'docs'
  }
})
