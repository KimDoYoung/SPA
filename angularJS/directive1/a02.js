var app = angular.module('app',[]);

app.controller('msg', function($scope){
    
});

app.directive('message', function($interpolate){

    return {
        compile : function(tElement, tAttribute){
            console.log(tAttribute.text + ' in Compiler');
            tElement.css('border', '1px solid red');
            //tElement는 jquery 객체이다. templateElement는 모든 것들에 적용된다
            return {
                pre : function(scope, iElement, iAttributes, controller){
                    console.log(iAttributes.text + ' In Pre');
                },
                post : function(scope, iElement, iAttributes, controller){
                    console.log(iAttributes.text + ' In Post');
                    //각각의 instance에서 적용
                    if(iAttributes.text === '3'){
                        iElement.css('border', '1px solid green');
                    }
                    //iElement도 jquery객체이다
                    iElement.on('click', scope.btnClick);
                }
            }
        },
        controller : function($scope, $element, $attrs){
            var v = $interpolate($attrs.text)($scope);

            console.log(v + ' In Controller');
            $scope.btnClick = function(){
                alert(v);
            }
        }

    }
    
});
