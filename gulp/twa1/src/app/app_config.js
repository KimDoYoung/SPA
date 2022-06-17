//var app = require('./app_module');

//app.config(config);

function config($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.hashPrefix(''); //이게 없으면 안되네.
    $stateProvider
    .state('firstMessage', {
        url : '/first-msg',
        templateUrl :'app/views/sub1/msg1.html',
        controller  :'msg1'
    })
    .state('secondMessage', {
        url : '/second-msg',
        templateUrl :'app/views/sub1/msg2.html',
        controller  :'msg2'
    })
    .state('home', {
        url : '/',
        template : '<strong>this is home</strong>'
    });

    $urlRouterProvider.otherwise('/');
}
module.exports = config;