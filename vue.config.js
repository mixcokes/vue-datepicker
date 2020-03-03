const config = {
  publicPath: './',
  filenameHashing: false,
  css: {
    extract: false
  }
}

if (process.argv.indexOf('--target') === -1 || process.argv.indexOf('lib') === -1) {
  console.info('Build docs')
  config.productionSourceMap = false
} else {
  console.info('Build dist')
  config.productionSourceMap = true
  config.configureWebpack = {
    externals: [
      'vue-popperjs',
      'vue-popperjs/dist/vue-popper.min.css'
    ],
    output: {
      libraryExport: 'default'
    }
  }
}

module.exports = config