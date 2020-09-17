const htmlWebpackPlugin = require("./htmlWebpackPlugin"),
    faviconsWebpackPlugin = require("./faviconsWebpackPlugin"),
    mergeJsonWebpackPlugin = require("./mergeJsonWebpackPlugin"),
    webpackHotMiddleware = require("./webpackHotMiddleware")

module.exports = [
    htmlWebpackPlugin,
    faviconsWebpackPlugin,
    mergeJsonWebpackPlugin,
    webpackHotMiddleware
]
