const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode : "development",
    entry : {
        main : './src/app.js'
    },
    output : {
        path : path.resolve('./dist'),
        filename : '[name]'.js
    },
    /** css 처리 */
    module : {
        rules : [
            {
                test : /\.css$/,
                use : ['style-loader', 'css-loader']
            },
            {
                test : /\.png$/,
                use :[
                    {
                        loader :  'file-loader',
                        options :{
                            //publicPath : '../dist'
                            name : '[name].[ext]?[hash]'
                        }
                    } 
                ]
            }
        ]
    },
    /**html  */
    plugins : [
       new HtmlWebpackPlugin({
           template : './src/index.html'
       }) ,
       new CleanWebpackPlugin()
    ]
}