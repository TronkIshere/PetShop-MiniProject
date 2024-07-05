// Example vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Other config options...
  resolve: {
    alias: {
      // Optionally configure aliases for paths
      '@assets': '/src/assets',
    },
  },
  plugins: [
    // Example plugin configuration for handling images
    // Modify as per your project needs
    {
      name: 'image-import-plugin',
      handleHotUpdate({ file }) {
        if (file.match(/\.jpg$/)) {
          // Handle image hot updates if necessary
        }
      },
    },
  ],
});