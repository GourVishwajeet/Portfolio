// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Replace 'your-repo-name' with your actual GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
});
