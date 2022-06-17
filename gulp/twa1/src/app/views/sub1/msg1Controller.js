//var app = require('../../app_module');

//app.controller('msg1', msg1Controller)
module.exports = function msg1Controller($scope, dateService){
    $scope.a = 10;
    $scope.b = 20;
    $scope.today = dateService.today();
}
