import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// 실습 페이지를 /practice.html 로 따로 열 수 있게 빌드 진입점을 두 개로 둔다.
// index.html 은 당분간 실습으로 가는 안내 페이지이고, 미션은 나중에 여기에 붙인다.
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
