var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
 
var output = "bin";

module.exports = {
    context: path.join(__dirname, ''),
    entry: "./app/main.js",
    output: {
        path: path.join(__dirname, output),
        filename: "require.js"
    },
    plugins: [
        new CleanWebpackPlugin([output]),
        new CopyWebpackPlugin([
            { from: 'index.html' },
            { from: 'icons/**/*.png' },
            { from: 'style.css' }
        ])
    ]
};
