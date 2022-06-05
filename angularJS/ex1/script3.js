var app = angular.module('app',[]);
app.controller("controller1", function($scope){
    $scope.firstName = "Hong";
    $scope.lastName = "Gil Dong";
});
//서비스 : 공통적인 함수, 싱글톤
app.service("service1", function(){
    this.reverse = function(name){
            return name.split("").reverse().join("");
    };
    this.strOk = function(str){    
            return str + "!!!";
    };
});
//팩토리 : 
app.factory("factory1", function(){
    return {
        reverse : function(name){
            return name.split("").reverse().join("");
        },
        strOk : function(str){
            return str + "!!!";
        }
    }
});
// service와 factory를 controller에서 사용한다.
app.controller("AppCtrl", function ($scope, service1, factory1){
    $scope.name = "Guest";
    $scope.reverseNameService = function(){
        $scope.name = service1.reverse($scope.name);
    }
    $scope.reverseNameFactory = function(){
        $scope.name = factory1.reverse($scope.name);
    }
});
// ng 기본 directive
app.controller("ngDirectiveCtrl", function ($scope, service1, factory1){
    $scope.name = "Guest";
    $scope.ArrayList = [
        {name:'Jang', age : 27},
        {name:'Kim', age : 19},
        {name:'Park', age : 20},
        {name:'Lee', age : 21}
    ];
    $scope.bTest = true;
});

app.directive('ok', function(){
    return {
        template : '<span style="font-size:24pt; color:red;">OK!</span>'
    }
});