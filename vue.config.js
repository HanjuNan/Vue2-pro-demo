const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': path.join(__dirname, '/', 'src')
      }
    }
  },
  devServer: {
      proxy: {
        //   '/api': {
        //       target: 'http://localhost:3434/',
        //       changeOrigin: true,
        //       pathRewrite: {
        //           '^/api': ''
        //       }
        //   },
          '/foo': {
            target: 'http://iwenwiki.com/api',
            changeOrigin: true,
            pathRewrite: {
                '^/foo': ''
            }
        }
      }
  },
 
})
