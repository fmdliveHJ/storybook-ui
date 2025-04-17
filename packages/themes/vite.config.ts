import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'themes',
      formats: ['es'],
      fileName: () => `index.js`,
    },
    sourcemap: true,
    minify: true,
    outDir: 'dist',
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
});
