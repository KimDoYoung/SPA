var app = require('../../app_module');
app.controller('msg1', msg2Controller)

function msg2Controller($scope){
    $scope.a = 10;
    $scope.b = 20;
}
