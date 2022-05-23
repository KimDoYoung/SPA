var path = require('path');
var webpack = require('webpack');
module.exports = {
    mode  : 'development',
    devtool : 'source-map',
    entry : {
        main : './ts-src/app.ts'
    },
    output : {
        path : path.resolve('./build'),
        filename : 'app.js'
    },
    module : {
        rules : [
            {
                test :/\.ts$/,
                include : path.resolve(__dirname, 'ts-src'),
                use :['ts-loader']
            }
        ]
    },
    resolve :{
        extensions :['', '.webpack.js', '.web .js', '.ts', '.js']
    },
    watch : true
}