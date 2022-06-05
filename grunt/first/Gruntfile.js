module.exports = function( grunt ){

    grunt.initConfig ({
        concat : {
            js : {
                src :['src/js/1.js', 'src/js/2.js'],
                dest : 'dist/js/script.js'
            },
            css : {
                src : ['src/css/main.css', 'src/css/theme.css'],
                dest : 'dist/css/style.css'
            }
        },
        watch: {
            js: {
              files: ['src/js/**/*.js'],
              tasks: ['concat']
            },
            css :{
                files: ['src/css/**/*.css'],
                tasks: ['concat']
            }
          },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat', 'watch']);

    // grunt myTask:111:222
    grunt.registerTask('myTask', 'my basic task', function(arg1, arg2){
        grunt.log.writeln(arg1 + ' - ' + arg2);
        grunt.task.run('concat');
    });
} 