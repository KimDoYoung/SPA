module.exports = function(grunt){
    'use strict'
    grunt.initConfig({
        package : grunt.file.readJSON('package.json'),

        uglify : {
            files : [ 
                        {
                            src : ['src/**/*.js'],
                            dest : 'dist/<%=package.name%>.min.js'
                        }    
                    ]
        },
    });
    grunt.registerTask('uglify', 'uglify');
    grunt.registerTask('default', ['uglify']); 
    //loading
}