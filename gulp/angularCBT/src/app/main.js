var app = require('./app_module');

//config (routing information)
var config = require('./app_config');
app.config( config );

app.provider('dataService', require('./app_provider'));
//services
//app.service('dateService', require('./common/dateService'));

//directives
//app.directive('myMsg', require('./components/common/msgDirective'));

//controllers
app.controller('msg1', require('./views/msg1Controller'));
app.controller('empListController', require('./views/empListController'));
app.controller('empDetailController', require('./views/empDetailController'));
