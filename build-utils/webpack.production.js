const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                          sourceMap: true,
                          modules: {
                                localIdentName: "[hash:base64:5]",
                          },	
                        }
                    },
                    "less-loader"
                ]
            }
        ],
    },
    plugins: [new MiniCssExtractPlugin()]

});