var app = angular.module('app',['ngRoute', 'ngAnimate']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {    
            templateUrl : 'views/home.html', 
            controller : 'ninjaController'
        })
        .when('/list', {
            templateUrl : 'views/list.html',
            controller : 'ninjaController'
        })
        .otherwise({
            redirectTo: '/home'
        }); 
}]);
app.directive('randomNinja', function(){
    return {
        restrict : 'E',
        scope : {
            ninjas : '=',
            title : '='
        },
        replace : true,
        transclue: true,
        templateUrl : 'views/random.html',
        controller : function($scope){
            $scope.random = Math.floor(Math.random() * 4);
        }
    }
})
app.controller('ninjaController', ['$scope', '$http', function($scope, $http){
    $scope.removeNinja = function(ninja){
        $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removeNinja,1);
    };
    $scope.addNinja = function(){
        $scope.ninjas.push({
            name: $scope.newninja.name,
            belt: $scope.newninja.belt,
            rate: parseInt($scope.newninja.rate, 10),
            available: true
        });
    }

}]);
