import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tailwindcss } from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: "assets", // Vite source
  build: {
    outDir: "../public/build", // Symfony public path
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    strictPort: true,
    origin: "http://localhost:5173",
    proxy: {
      "/": "http://localhost:8000", // Proxy Symfony backend
    },
  },
});
