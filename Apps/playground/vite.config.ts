import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@reacture/core": path.resolve(__dirname, "../../packages/core/src"),
      "@reacture/grid": path.resolve(__dirname, "../../packages/grid/src"),
      "@reacture/theme": path.resolve(__dirname, "../../packages/theme/src"),
    },
  },
});
