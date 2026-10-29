import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    // TypeScript 도입으로 검사 대상을 ts와 tsx 파일로 변경했습니다.
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      // TypeScript 문법과 타입 관련 기본 규칙을 추가합니다.
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
])