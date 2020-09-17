const {merge}  = require("webpack-merge")
const config = require("./webpack.common")

module.exports = merge(config, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
      contentBase: "./dist",
      compress: true,
      port: 9000,
      hot: true,
      historyApiFallback: true
   }
})
