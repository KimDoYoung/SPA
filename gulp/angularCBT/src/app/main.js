var app = require('./app_module');

//config (routing information)
var config = require('./app_config');
app.config( config );

//run
app.run(require('./app_run'));

//provider
app.provider('dataService', require('./app_provider'));

//services
app.service('sessionStorage', require('./common/sessionStorageService'));
app.service('localStorage', require('./common/localStorageService'));

//directives
//app.directive('myMsg', require('./components/common/msgDirective'));

//controllers
app.controller('msg1', require('./views/msg1Controller'));
app.controller('empListController', require('./views/empListController'));
app.controller('empDetailController', require('./views/empDetailController'));
