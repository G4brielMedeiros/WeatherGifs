const webpack = require("webpack");
const path = require("path");

const config = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "bundle.js",
    },
};

module.exports = config;
