var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src/scripts");

var config = {
    entry: SRC_DIR + "/utilities/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js"
    },
    module: {
        rules: [{        
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "env", "stage-2"]
                },
            }]
    }
};

module.exports = config;