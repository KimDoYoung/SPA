var app = angular.module('app', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.hashPrefix(''); 
    $urlRouterProvider.otherwise("/");
    $stateProvider
    .state('home', {
        url : '/',
        template : '<strong>this is home</strong>'
    });
});

