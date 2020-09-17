module.exports = {
    test: /\.(svg|png|jpg|gif)$/,
    use: {
        loader: "file-loader",
        options: {
            name: "[name].[ext]",
            outputPath: "img"
        }
    }
};
