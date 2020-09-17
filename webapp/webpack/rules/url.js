const path = require("path")

module.exports = {
    test: /\.ttf$/,
    loader: "url-loader", // or directly file-loader
    include: path.resolve(__dirname, "node_modules/react-native-vector-icons"),
}

