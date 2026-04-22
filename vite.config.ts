import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-oxc'; // <-- Cambiamos la importación aquí

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});