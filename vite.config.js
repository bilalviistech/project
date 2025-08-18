import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/views": path.resolve(__dirname, "./src/views"),
      "@/config": path.resolve(__dirname, "./src/config"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/context": path.resolve(__dirname, "./src/context"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/layout": path.resolve(__dirname, "./src/layout"),
      "@/api": path.resolve(__dirname, "./src/api"),
      "@/hooks": path.resolve(__dirname, "./src/hooks"),
      "@/redux": path.resolve(__dirname, "./src/redux"),
    },
  },
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});
