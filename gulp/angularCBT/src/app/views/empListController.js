module.exports = function($scope, dataService, sessionStorage){
    $scope.isLoading = true;
    $scope.name = sessionStorage.get('name');
    dataService.getEmployees().then(function(result){
        console.log(result);
        $scope.items = result.data.users;
        $scope.isLoading = false;
    });

}