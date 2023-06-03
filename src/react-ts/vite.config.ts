import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // ホストバインディングを指定します
    port: 80 // 開発サーバーのポート番号を指定します
  }
})
