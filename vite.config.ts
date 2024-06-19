import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import mdx from "@mdx-js/rollup";
// import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const mdx = await import("@mdx-js/rollup");
  return {
    base: "/pushcode/",
    plugins: [
      react(),
      mdx.default({
        // mdxOptions: {
        //   remarkPlugins: [],
        //   // rehypePlugins: [],
        // },
        // providerImportSource: "@mdx-js/react",
      }),
    ],
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
        // "@src": "/src",
        "@components": path.resolve(__dirname, "./src/components"),
      },
    },
  };
});
