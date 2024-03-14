import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Assets": path.resolve(__dirname, "./src/assets"),
      "@Components": path.resolve(__dirname, "src/components"),
      "@Hooks": path.resolve(__dirname, "src/hooks"),
      "@Store": path.resolve(__dirname, "src/store"),
      "@Types": path.resolve(__dirname, "./src/types"),
      "@Utils": path.resolve(__dirname, "./src/utils"),
    },
  },
});
