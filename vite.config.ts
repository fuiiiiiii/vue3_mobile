import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';
import vantStyle from './src/style/vant-defalut';
const { resolve } = require("path");
console.log(resolve(__dirname, './src'))
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8089, // 设置服务启动端口号
    open: true,
    cors: true, // 允许跨域
    // 设置代理，根据项目实际情况配置
    proxy: {
      "/cadinea": {
        target: "https://apigatewayqa.sgmlink.com:3302/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
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
