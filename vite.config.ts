import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // نستخدم اسم المستودع كـ base لضمان تحميل الملفات بشكل صحيح
  base: '/sarahatef1/', 
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    historyApiFallback: true,
  }
});
