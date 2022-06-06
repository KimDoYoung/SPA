module.exports = function(grunt){
    grunt.initConfig({
        package : grunt.file.readJSON('package.json'),

        clean: {
              dist :  ['dist/']
        },
        concat: {
            options: {
              separator: ';',
            },
            dist: {
              src: ['src/**/*.js'],
              dest: 'dist/<%=name%>.js',
            },
          },
          uglify : {
            files : [ 
                        {
                            src : ['src/**/*'],
                            dest : 'dist/<%=name%>.min.js'
                        }    
                    ]
        },
    });
    //loading
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    //register
    grunt.registerTask('clean', 'clean');
    grunt.registerTask('concat', 'concat');
    grunt.registerTask('uglify', 'uglify');
    //grunt 명령어로 실행할 작업
    grunt.registerTask('default', ['clean', 'concat', 'uglify']); 
}