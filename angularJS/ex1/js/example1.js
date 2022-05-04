var app = angular.module("app", []);
app.controller("ctrl1", function($scope){
    $scope.first = 1;
    $scope.second = 1;
    
    $scope.sumClick = function(){
        // debugger;
        $scope.sum1 = (+$scope.first + +$scope.second);
    }

    $scope.person = {
        firstName : 'Hong',
        lastName : 'Gil Dong'
    }
    $scope.capitals = [
        {city : 'seoul', nation : 'korea'},
        {city : 'tokyo', nation : 'japan'},
        {city : 'beijing', nation : 'china'},
    ];
});