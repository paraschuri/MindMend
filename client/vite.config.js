import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://mindmend.onrender.com', // Your backend API address
        changeOrigin: true,
      },
    },
  },
});