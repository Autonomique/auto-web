import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const entry = (path: string) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rolldownOptions: {
      input: {
        home: entry('./index.html'),
        industries: entry('./industries/index.html'),
        news: entry('./news/index.html'),
        company: entry('./company/index.html'),
      },
    },
  },
})
