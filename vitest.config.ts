import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react()],
  test: {
    environment: "jsdom",
    setupFiles: ['./vitetest.testconfig.ts',],
  coverage: {
			include: ['app/**/*.{ts,tsx}'],
			all: true,
		},
    globals: true,
    css: true,
  },
});
