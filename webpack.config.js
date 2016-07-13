 var CleanWebpackPlugin = require('clean-webpack-plugin');
 var CopyWebpackPlugin = require('copy-webpack-plugin');
 var path = require('path');
  
 var output = "bin";
 
 module.exports = {
     context: path.join(__dirname, ''),
     entry: "./src/main.js",
     output: {
         path: path.join(__dirname, output),
         filename: "bundle.js"
     },
     plugins: [
         new CleanWebpackPlugin([output]),
         new CopyWebpackPlugin([
             { from: 'index.prod.html', to: "index.html" },
            { from: "node_modules/core-js/client/shim.min.js", to: "node_modules/core-js/client" },
            { from: "node_modules/zone.js/dist/zone.js", to: "node_modules/zone.js/dist" },
            { from: "node_modules/reflect-metadata/Reflect.js", to: "node_modules/reflect-metadata" },
            { from: "systemjs.config.js" },
             { from: 'src/**/*.html' },
             { from: 'icons/**/*.png' },
             { from: 'styles/**/*.css' }
         ])
     ]
 };
