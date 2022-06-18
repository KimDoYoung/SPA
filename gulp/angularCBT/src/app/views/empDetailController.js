module.exports = function($scope, $stateParams, dataService){
    $scope.isLoading = true;
    $scope.isNotFound = false;
    $scope.id = $stateParams.id;
    dataService.getEmployees().then(function(result){
        console.log(result);
        // debugger;
        $scope.employee = undefined;
        result.data.users.forEach(user => {
            if(user.id == $scope.id){
                $scope.employee = user;
            }
        });
        $scope.isNotFound = $scope.employee ? false : true;
        
        $scope.isLoading = false;
    });

}