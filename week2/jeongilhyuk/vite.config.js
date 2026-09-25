import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// 진입점이 두 개다. index.html 이 미션(당근마켓 홈)이고,
// practice.html 이 리액트 빠른 시작 실습이다. 실습도 계속 열려 있어야 해서 남겨 뒀다.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: fileURLToPath(new URL('./index.html', import.meta.url)),
        practice: fileURLToPath(new URL('./practice.html', import.meta.url)),
      },
    },
  },
})
