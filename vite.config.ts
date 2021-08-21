import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { ViteAliases } from "vite-aliases";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ez_sample",
  plugins: [
    reactRefresh(),
    ViteAliases({
      useConfig: true,
      useTypescript: true,
      useRelativePaths: true,
      deep: true,
      depth: 2,
      adjustDuplicates: true,
    }),
  ],
});
