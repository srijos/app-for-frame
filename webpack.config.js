const path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname+ '/public', '/dist'),
        filename: 'index_bundle.js',
        // publicPath: path.join(__dirname+ '/public', '/dist/').replace(":","").replace("\\", "/"),
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                  presets: ["@babel/preset-react"]
                }
              }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    mode: 'development',
}