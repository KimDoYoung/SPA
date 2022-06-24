var app = angular.module('app', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.hashPrefix(''); 
    $urlRouterProvider.otherwise("/index");
    $stateProvider
    .state('index', {
        url : '/index',
        views : {
            'menu-view' : {
                templateUrl : "tpl/menu.html"
            },
            'container-view' : {
                templateUrl : "tpl/container.html"
            },
            'left-view@index' : {
                templateUrl : 'tpl/departure.html'
            },
            'right-view@index' : {
                templateUrl : 'tpl/arrival.html'
            },
        }
    })
    //departure
    .state('departure', {
        url : '/departure',
        views : {
            'menu-view' : {
                templateUrl : 'tpl/menu.html'
            },
            'container-view' : {
                templateUrl : 'tpl/departure.html'
            } 
        }
    })
    .state('departure.add', {
        url : '/add',
        views : {
            'bottom-view@departure' : {
                templateUrl : 'tpl/departure.add.html'
            }
        }
    })    
    .state('departure.list', {
        views : {
            'bottom-view@departure' : {
                templateUrl : 'tpl/departure.list.html'
            }
        }
    })    
    //arrival
    .state('arrival', {
        url : '/arrival',
        views : {
            'menu-view' : {
                templateUrl : 'tpl/menu.html'
            },
            'container-view' : {
                templateUrl : 'tpl/arrival.html'
            } 
        }
    })
    .state('arrival.add', {
        url : '/add',
        views : {
            'bottom-view@arrival' : {
                templateUrl : 'tpl/arrival.add.html'
            }
        }
    })
    .state('arrival.list', {
        url : '/list',
        views : {
            'bottom-view@arrival' : {
                templateUrl : 'tpl/arrival.list.html'
            }
        }
    })
    ;;;;;;
});

