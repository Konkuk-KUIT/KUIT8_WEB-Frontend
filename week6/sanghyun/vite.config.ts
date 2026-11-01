// TypeScript 도입에 맞춰 vite.config.js의 확장자만 .ts로 변경했습니다.
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
