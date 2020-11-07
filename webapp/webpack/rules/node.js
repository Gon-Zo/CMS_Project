module.exports = {
    exclude: /node_modules/, // don't transpile node_modules
    test: /\.jsx$/,          // do transpile any files ending in .jsx
    use: {
        loader: 'babel-loader',
        options: {
            plugins: ['@babel/plugin-transform-react-jsx']
        }
    }
}
