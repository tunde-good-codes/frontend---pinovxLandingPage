import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import mkcert from 'vite-plugin-mkcert'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss(), mkcert()],
  server: {
    https: true,
=======
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
>>>>>>> 6c54cdae47aa08f8cc458253617e22eab927ee23
    host: 'localhost',
    port: 5173,
  },
})
