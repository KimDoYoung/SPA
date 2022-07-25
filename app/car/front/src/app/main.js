var app = require('./app_module');

//config (routing information)
var config = require('./app_config');
app.config( config );

//app_run (routing 시 체크)
var run = require('./app_run');
app.run( run );

//filter
require('./common/filters')
// app.filter('displayYmd', function(){
//     return function(ymd, gubun){
//         let y=ymd.substring(0,4)
//         let m=ymd.substring(4,6)
//         let d=ymd.substring(6)
//         let g=gubun||'-'
//         return `${y}${g}${m}${g}${d}`
//     }
// })
//constant
// app.constant('CONST', {companyName : 'kalap tech'});
app.constant('CONFIG', require('./common/contants'));

//provider
app.provider('dataProvider', require('./app_provider'));

// //services
app.service('sessionStorage', require('./common/sessionStorageService'));
app.service('localStorage', require('./common/localStorageService'));
app.service('dateService', require('./common/dateService'))

// //directives
app.directive('headerLink', require('./components/nav/headerLinkDirective'))
app.directive('footerInfo', require('./components/layout/footerDirective'))
app.directive('displayYmd', require('./components/common/displayYmdDirective'))
//controllers
app.controller('carController', require('./views/car/carController'));
