const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const path = require("path")

const __faviconsDir = path.join(__dirname , "../../public/favicon.ico")

module.exports  = new FaviconsWebpackPlugin(__faviconsDir) // svg works too!
