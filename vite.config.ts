import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // include: ["react/jsx-runtime"],
    // exclude: [],
  },
  build: {
    // manifest: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      // "@src": "./src",
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
});
