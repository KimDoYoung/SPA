// route 
module.exports = function config($stateProvider, $urlRouterProvider, $locationProvider){
    const viewDir = 'app/views';
    const viewEmployeeDir = viewDir ;
    $locationProvider.hashPrefix(''); //이게 없으면 안되네.
    $stateProvider
    .state('sample01', {
        url : '/sample01',
        templateUrl : 'app/views/sample01.html',
        controller : 'msg1'
    })
    .state('sample02', {
        url : '/sample02',
        views : {
            '' : {
                templateUrl : 'app/views/sample02.html',
                controller : 'msg1'
            },
            'test' : {
                template : '<strong> testing info</strong>'
            }
        }
    }) 
    .state('employees', {
        url : '/employees',
        views : {
            'emp-header' : {
                templateUrl : `${viewEmployeeDir}/emp-header.html`
            },
            'emp-list' : {
                templateUrl : 'app/views/emp-list.html',
                controller : 'empListController'
            }
        }
    })   
    .state('employeeDetail', {
        url : '/employees/:id',
        views : {
            'emp-header' : {
                templateUrl : `${viewEmployeeDir}/emp-header.html`
            },
            'emp-detail' : {
                templateUrl : 'app/views/emp-detail.html',
                controller : 'empDetailController'
            }
        }
    })   
    .state('home', {
        url : '/',
        template : '<strong>this is home</strong>'
    });

    $urlRouterProvider.otherwise('/');
}
