import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      // Correct path: Use the sub-module entry point
      'react-icons/si' 
    ],
  },
});