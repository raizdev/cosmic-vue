import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import i18nResources from "./src/Common/Helpers/Locale";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      i18nResources({
          path: resolve(__dirname, "src/Locales/frontend"),
      }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
