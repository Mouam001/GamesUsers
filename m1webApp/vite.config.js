import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test :{
    coverage: {
      all: true,
      reporter: ['lcov','text', 'html', 'text-summary'],
    },
    css :true,
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
})
