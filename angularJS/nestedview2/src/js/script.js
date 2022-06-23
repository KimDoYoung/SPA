var app = angular.module('app', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.hashPrefix(''); 
    $urlRouterProvider.otherwise("/");
    $stateProvider
    .state('employees', {
        url : '/employees',
        views : {
            '' : {
                templateUrl : 'tpl/emp-layout.html'
            },
            'emp-header@employees' : {
                templateUrl : 'tpl/emp-header-info.html'
            }
        }
    })
    .state('home', {
        url : '/',
        template : '<strong>this is home</strong>'
    });
});

