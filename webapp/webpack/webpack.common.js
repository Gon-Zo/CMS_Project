const path = require("path");

const rules = require("./rules")

const plugins = require("./plugins")

module.exports = {
    entry: {
        app: "./src/index.js",
    },
    output: {
        path: path.join(__dirname, "../dist"),
        publicPath : "/",
        filename: "main.[hash].js"
    },
    module: {rules},
    plugins: plugins
};
