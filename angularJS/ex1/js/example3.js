var app = angular.module("app", []);
app.controller("ctrl1", function($scope){
    $scope.disbleButton = false;
    $scope.textStyle = "bluetext";
    $scope.list = [
        {name: '홍길동1', address:"서울 은평구1"},
        {name: '홍길동2', address:"서울 은평구2"},
        {name: '홍길동3', address:"서울 은평구2"},
        {name: '홍길동4', address:"서울 은평구2"},
        {name: '홍길동5', address:"서울 은평구2"},
        {name: '홍길동6', address:"서울 은평구2"},
        {name: '홍길동7', address:"서울 은평구2"},
    ]
});