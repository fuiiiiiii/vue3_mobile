import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';
import vantStyle from './src/style/vant-defalut';
const { resolve } = require("path");
console.log(resolve(__dirname, './src'))
// https://vitejs.dev/config/
export default defineConfig({
 
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
    }
  },
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: name => `vant/es/${name}/style/less.js`
        }
      ]
    })],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          ...vantStyle
        },
      },
      scss: {
        additionalData: '@import "./src/style/global.scss";'
      }
    },
  },
})
