module.exports = function($scope, dataService){
    $scope.isLoading = true;
    dataService.getEmployees().then(function(result){
        console.log(result);
        $scope.items = result.data.users;
        $scope.isLoading = false;
    });

}