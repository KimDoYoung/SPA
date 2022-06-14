var app = require('../../app_module');

app.controller('msg1', msg1Controller)
function msg1Controller($scope){
    $scope.a = 10;
    $scope.b = 20;
}