// route 
module.exports = function config($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.hashPrefix(''); //이게 없으면 안되네.
    $stateProvider
    .state('home', {
        url : '/',
        template : '<strong>this is home</strong>'
    });

    $urlRouterProvider.otherwise('/');
}
