const commonConfig = require("./webpack.common")
const { merge } = require("webpack-merge")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

const devConfig = {
    mode: "development",
    devServer: {
        port: 8082,
        historyApiFallback: {
            index: "index.html",
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./public/index.html"
        }),
        new ModuleFederationPlugin({
            name: "marketing",
            filename: "entryPoint.js",
            exposes: {
                "./MarketingIndex": "./src/bootstrap.js"
            }
        })
    ]
}

module.exports = merge(commonConfig, devConfig)