var path = require("path");

module.exports = {
    entry: "./main",
    output: {        
        filename: "app.js",
        path: __dirname
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                loader: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
}