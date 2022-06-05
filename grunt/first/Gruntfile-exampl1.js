module.exports = function( grunt ){
    grunt.registerTask('speak', function(){
        console.log("I'm Speaking");
    });
    grunt.registerTask('yell', function(){
        console.log("I'm Yelling");
    });
    grunt.registerTask('both',['speak', 'yell']);
    grunt.registerTask('default',['speak', 'yell']);
} 