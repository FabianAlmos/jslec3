const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "production",
    entry: {
        filename: path.resolve(__dirname, "src/index.js")
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
        assetModuleFilename: "[name][ext]",
        clean: true
    },
    devServer: {
      port: 3000,
      compress: true,
      hot: true,
      static: {
        directory: path.join(__dirname, "dist")
      }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ "style-loader", "css-loader", "sass-loader" ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
                type: "asset/resource"
            },
            {
                test: /\.js$/,
                use: "babel-loader"
            }
        ]
    },
    performance: {
        hints: false,
        maxAssetSize: 512000,
        maxEntrypointSize: 512000
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "My title",
            filename: "index.html",
            template: "./src/index.html"
        })
    ]
}