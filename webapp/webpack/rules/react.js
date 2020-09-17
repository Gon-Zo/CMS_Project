module.exports = {
    test: /\.(js|jsx)$/,
    exclude: /node_module/,
    use: {
        loader: "babel-loader"
    }
};
