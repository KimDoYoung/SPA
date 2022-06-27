module.exports = function($scope, sessionStorage, dateUtil){
    $scope.a = 10;
    $scope.b = 20;
    $scope.msg = dateUtil.today();
    sessionStorage.set('name', '홍길동' );
}