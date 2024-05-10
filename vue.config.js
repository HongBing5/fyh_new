const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // transpileDependencies: true
  // 设置输出路径为 'dist' 目录
  outputDir: 'dist',

  // 设置公共路径为根目录
  publicPath: '/',

  // 设置静态资源路径为 'static' 目录
  assetsDir: 'static'

  // 其他配置项...
})
