var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/first-msg', {
        template : '<strong>this is first message</strong>',
        caseInsensitivieMatch : true
    })
    .when('/second-msg', {
        templateUrl : 'msg1.html',
        controller : 'message1'
    })
    .when('/third-msg', {
        //redirectTo : '/second-msg'
        redirectTo : function(){
            alert("Sorry!");
            return '/first-msg';
        }
    })
    .when('/', {
        template : 'default route'
    })
    .otherwise({
        template : '<strong>No content avaiable</strong>'
    })
}]);

app.controller('message1', function($scope){
    $scope.a = 10;
    $scope.b = 20;
});