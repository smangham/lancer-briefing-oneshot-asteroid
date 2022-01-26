import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/lancer-briefing-oneshot-asteroid/",
  resolve: {
    alias: {
//      '@': path.resolve(__dirname, './src'),
      '@': path.resolve(__dirname, './lancer-briefing-oneshot-asteroid/src'),
    },
  }
})