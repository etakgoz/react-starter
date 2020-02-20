const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require('./build-utils/loadPresets.js');

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {


    return webpackMerge(
        {
            mode,
            output: {
                filename: "bundle.js"
            },
            module: {
                rules: [
                    {
                        test: /\.jpe?g$/, // note this
                        use: [
                            {
                                loader: 'url-loader',
                                options: {
                                    limit: 5000
                                }
                            }
                        ]
                    },
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: {
                            loader: "babel-loader"
                        }
                    },
                    {
                        test: /\.html$/,
                        use: {
                            loader: "html-loader"
                        }
                    }
                ]
            },
            plugins: [
                new HtmlWebPackPlugin({
                    template: "./src/index.html",
                    filename: "./index.html"
                }), 
                new webpack.ProgressPlugin()
            ]
        },
        modeConfig(mode),
        presetConfig({ mode, presets })
    );

};