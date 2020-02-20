module.exports = () => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader", 
                    {
                        loader: "css-loader",
                        options: {
                          sourceMap: true,
                          modules: true
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                  {
                    loader: "style-loader"
                  },
                  {
                    loader: "css-loader",
                    options: {
                      sourceMap: true,
                      modules: {
                            localIdentName: "[name]__[local]___[hash:base64:5]",
                      },	
                    }
                  },
                  {
                    loader: "less-loader"
                  }
                ]
              }

        ]
    }
});