module.exports = function($http, $scope, dateService, CONFIG) {
    $scope.title = 'Car Events'
    $scope.totalCount =0
    $scope.isList = false;
    $scope.buttonTitle = 'new event'
    // $scope.ymd= dateFilter( new Date(), 'yyyy-MM-dd')
    $scope.ymd= dateService.today
    $scope.event_id = 1
    $scope.evnet_nm = '주유'    
    $scope.toggle = function(){
        $scope.isList = !$scope.isList
        if($scope.isList){
            $scope.buttonTitle = 'new event'
        }else{
            $scope.buttonTitle = 'show list'
        }
    }
    $scope.eventIdChange = function(){
        console.log( $scope.event_id )
        let event_id = $scope.event_id;
        let event_nm_array=['','주유','정비','']
        if(event_id == 3){
            $scope.event_nm = event_nm_array[event_id]
        }
    }
    $scope.addClick = function(){
        console.log('add click')
        let url = CONFIG.SERVER+'/car'
        let data = {
            ymd : $scope.ymd.replace(/-/g, ""),
            event_cd: $scope.event_id,
            event_nm: 'abc'
        }
        console.log(url, data)
        $http.post(url, JSON.stringify(data))
        .then(function(response){
                console.log(response)
        }, function(error){
            console.error(error)
        })
    }
    $scope.list = $http.get(CONFIG.SERVER + '/car/list')
        .then(
            (response)=>{
                console.log(response)
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