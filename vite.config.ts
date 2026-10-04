import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [tailwindcss(), react(), imagetools()],
  build: {
    modulePreload: {
      polyfill: true,
    },
  },
});
