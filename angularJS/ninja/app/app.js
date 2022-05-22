var app = angular.module('app',['ngRoute', 'ngAnimate']);
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    
    //$locationProvider.html5Mode(true);
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $routeProvider
        .when('/', {
            templateUrl:'views/home.html',
            controller: 'ninjaController'
        })
        .when('/list', {
            templateUrl : 'views/list.html',
            controller : 'ninjaController'
        })
        .when('/contact', {
            templateUrl : 'views/contact.html',
            controller : 'ninjaController'
        }) 
        .when('/contact-success', {
            templateUrl:'views/contact-success.html',
            controller: 'ContactController'
         })               
        .otherwise({
            redirectTo: '/'
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
            transclude: true,
            templateUrl : 'views/random.html',
            controller : function($scope){
                $scope.random = Math.floor(Math.random() * 4);
            }
    }
});
app.controller("ContactController",['$scope', '$location', function($scope, $location){
    $scope.sendMessage = function(){
        $location.path('/contact-success');
    }
}]);
app.controller('ninjaController', ['$scope', '$http', function($scope, $http){

    $scope.removeNinja = function(ninja){
        $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice($scope.ninjas,1);
    };
    $scope.addNinja = function(){
        $scope.ninjas.push({
            name: $scope.newninja.name,
            belt: $scope.newninja.belt,
            rate: parseInt($scope.newninja.rate, 10),
            available: true
        });
    }
    $scope.removeAll = function(){
        $scope.ninjas = [];
    }
    $http.get('data/ninjas.json').then(
        (response)=>{
            $scope.ninjas = response.data;
        },
        (error) => {
            console.log(error)
        }
    );

}]);
