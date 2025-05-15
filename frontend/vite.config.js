import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "../dist", // Explicit output directory
    emptyOutDir: true,
    sourcemap: true, // Helpful for debugging
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Your backend URL
        changeOrigin: true,
      },
    },
  },
});
