var app = require('./app_module');

//config (routing information)
var config = require('./app_config');
app.config( config );

//app_run (routing 시 체크)
var run = require('./app_run');
app.run( run );

//constant
app.constant('dateUtil', require('./common/dateUtil.js'));

//provider
app.provider('dataProvider', require('./app_provider'));

//services
app.service('sessionStorage', require('./common/sessionStorageService'));
app.service('localStorage', require('./common/localStorageService'));

//directives
app.directive('headerLink', require('./components/nav/headerLinkDirective'))
app.directive('footer', require('./components/layout/footerDirective'))

//services
//app.service('dateService', require('./common/dateService'));

//directives
//app.directive('myMsg', require('./components/common/msgDirective'));

//controllers
//app.controller('msg1', require('./views/sub1/msg1Controller'));
