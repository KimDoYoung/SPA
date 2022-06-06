module.exports = {
    config : {
        tailwindjs : './tailwind.config.js',
        port : 9050
    },
    paths : {
            root : './',
            src  : {
                base   : './src',
                css    : './src/css',
                js     : './src/js',
                image  : './src/image'
            },
            dist : {
                base   : './dist',
                css    : './dist/css',
                js     : './dist/js',
                image  : './dist/image'
            },
            build : {                
                base   : './build',
                css    : './build/css',
                js     : './build/js',
                image  : './build/image'
            }
    }
}