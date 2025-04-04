import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@locales': path.resolve(__dirname, './src/locales'),
    },
  },
  server: {
    // Permitir qualquer host do ngrok
    allowedHosts: ['localhost', '127.0.0.1', '.ngrok-free.app', '.ngrok.io'],
    // Configurar para escutar em todas as interfaces de rede
    host: '0.0.0.0',
  },
  assetsInclude: [
    '**/*.svg',
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.gif',
    '**/*.ttf',
    '**/*.woff',
    '**/*.woff2',
    '**/*.otf',
  ],
});
