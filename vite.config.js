import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/exercices-2e/',  // Updated from pfeq-arithmetique
  plugins: [react()]
})
