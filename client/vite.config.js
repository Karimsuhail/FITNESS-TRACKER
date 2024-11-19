// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // Add this configuration to treat .js as .jsx
      loader: {
        '.js': 'jsx',
      },
    }),
  ],
});
