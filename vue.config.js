module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/DynaWorldWebsite/'
    : '/',
  outputDir: 'dist',
  assetsDir: '',
  productionSourceMap: false,
  configureWebpack: {
    performance: {
      hints: false
    }
  }
} 