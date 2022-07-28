// route
module.exports = ($stateProvider, $urlRouterProvider, $locationProvider) => {
    $locationProvider.hashPrefix('');
    $stateProvider
        .state('car', {
            url: '/car',
            templateUrl: 'app/views/car/car.tpl.html',
            controller: 'carController'
        })
        .state('user', {
            url: '/user',
            templateUrl: 'app/views/user/user.tpl.html',
            controller: 'userController'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'app/views/login.tpl.html'
        })
        .state('home', {
            url: '/',
            templateUrl: 'app/views/home.tpl.html'
        });

    $urlRouterProvider.otherwise('/');
};
