var app = angular.module('app',[]);

app.controller('msg', function($scope){
    
});

app.directive('message', function(){

    return {
        compile : function(tElement, tAttribute){
            console.log(tAttribute.text + ' in Compiler');
            return {
                pre : function(scope, iElement, iAttributes, controller){
                    console.log(iAttributes.text + ' In Pre');
                },
                post : function(scope, iElement, iAttributes, controller){
                    console.log(iAttributes.text + ' In Post');
                }
            }
        },
        controller : function($scope, $element, $attrs){
            console.log($attrs.text + ' In Controller');
        }
    }
    
});
