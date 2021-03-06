var path = require("path");
 
module.exports = {
    mode: "development",
    entry: "C:\\Users\\jaydp\\Documents\\Github\\Fable\\FirstFableProject\\src\\App.fsproj",
    output: {
        path: "C:\\Users\\jaydp\\Documents\\Github\\Fable\\FirstFableProject\\public",
        filename: "bundle.js",
    },
    devServer: {
        contentBase: "public",
        port: 8080,
    },
    module: {
        rules: [{
            test: /\.fs(x|proj)?$/,
            use: "fable-loader"
        }]
    }
}