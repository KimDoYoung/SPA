module.exports = function($scope, sessionStorage){
    $scope.a = 10;
    $scope.b = 20;
    sessionStorage.set('name', '홍길동');
}