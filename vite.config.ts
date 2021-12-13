import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';
import vantStyle from './src/style/vant-defalut';
// https://vitejs.dev/config/
export default defineConfig({
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
    },
  },
})
