/// <reference types="vitest" />

import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const root = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  base: "/game-database",
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern"
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: root }]
  },
  test: {
    environment: "jsdom",
    globals: true,
    root: root,
    setupFiles: "tests/setup.ts"
  }
});
