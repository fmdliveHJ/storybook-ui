import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'themes',
      fileName: (format) => `themes.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
    outDir: './dist',
  },
});
