// vitest.config.ts
/// <reference types="vitest" />

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  define: {
    DEV: JSON.stringify(false),
    PROD: JSON.stringify(false),
    TEST: JSON.stringify(false),
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: [resolve(__dirname, "./vitest.setup.ts")],

  },
  
});

// "test": "vitest --coverage"