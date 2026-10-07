import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [tailwindcss(), react(), imagetools()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("node_modules/react") ||
            id.includes("node_modules/react-dom") ||
            id.includes("node_modules/vite-react-ssg")
          ) {
            return "vendor-core";
          }
        },
      },
    },
    modulePreload: {
      polyfill: true,
    },
  },
});
