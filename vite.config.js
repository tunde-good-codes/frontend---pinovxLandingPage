import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import mkcert from 'vite-plugin-mkcert'  // 🔴 Comment this out

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // mkcert() // 🔴 Disable mkcert plugin temporarily
  ],
  server: {
    // https: true, // 🔴 Disable HTTPS
    host: 'localhost',
    port: 5173,
  },
})
