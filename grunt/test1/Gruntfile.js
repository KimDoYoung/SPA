module.exports = function(grunt){
    grunt.initConfig({
        package : grunt.file.readJSON('package.json'),
        uglify : {
            files : [ 
                        {
                            src : ['src/a.js', 'src/b.js'],
                            dest : 'build/a.min.js'
                        }    
                    ]
        }
    });
    //loading
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //register
    grunt.registerTask('uglify', 'uglify');
}