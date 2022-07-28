module.exports = function($http, $scope, Config){
    
    $scope.list = [];
    $scope.totalCount = 0;

    $scope.getList = () => {
        $http.get(Config.Server + '/user/list')
        .then(
            (response)=>{
                console.log(response.data.data.list)
                $scope.list = response.data.data.list
                $scope.totalCount = response.data.data.totalCount
            },
            (error)=>{
                $scope.list = []
                console.log(error)
            }
        )   
    }
    $scope.init = () => {
        $scope.getList()
    };
    $scope.initSearch = ()=>{
        console.log('init callback in parent')
    }
    $scope.search = (keyword) => {
        console.log('parent recevied keyword:' +keyword)
    }

    $scope.init();
  }
