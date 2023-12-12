
const commonConfig = require("./webpack.common")
const {merge} = require("webpack-merge")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const HTMLWebpackPlugin = require("html-webpack-plugin")

const devConfig = {
    mode: "development",
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: "index.html"
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./public/index.html"
        }),
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                marketing: "marketing@http://localhost:8082/entryPoint.js"
            }
        })
    ]
}

module.exports = merge(commonConfig, devConfig)