import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rolldownOptions: {
      input: {
        labs: fileURLToPath(new URL('./index.html', import.meta.url)),
        nemo: fileURLToPath(new URL('./nemo/index.html', import.meta.url)),
      },
    },
  },
})
