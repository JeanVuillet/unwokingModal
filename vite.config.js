import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';


export default defineConfig({
  plugins: [
    react(),
    eslint(),
  ],
  build: {
    lib: {
      entry: './src/lib/index.jsx', // Assurez-vous que ce chemin est correct
      name: 'MyModal',
      formats: ['es', 'umd'],
      fileName: (format) => `my-modal.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled'
        },
      },
    },
  },
});
