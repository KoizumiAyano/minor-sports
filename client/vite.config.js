import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // ここを追加
  optimizeDeps: {
    include: ['@supabase/supabase-js'],
  },

  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // localhost に変更
        changeOrigin: true
      }
    }
  },

  build: {
    outDir: 'dist'
  }
})
