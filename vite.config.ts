import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/MyProfile/',
  plugins: [react()],
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.VITE_API_KEY || '')
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});