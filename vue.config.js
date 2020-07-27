const path = require('path');

client_port = process.env.PORT

module.exports = {
  // change output folder on build for deployment 
  // outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {

    proxy: {
      '/api': {
        
        target: "https://api-rifa-que-soma.herokuapp.com",
        ws: true,
        changeOrigin: true
      }
    }
  }
}