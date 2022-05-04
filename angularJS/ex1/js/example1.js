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
    $scope.groceries = [
        {item : '딸기', purchased : false},
        {item : '바나나', purchased : false},
        {item : '포도', purchased : false},
        {item : '수박', purchased : false},
    ]
    $scope.showList = false;
    $scope.getList = function(){
        return $scope.showList ? "template/grocerylist.tpl.html" : "template/grocerylist2.tpl.html";
    }
    $scope.number4 = 0;
});