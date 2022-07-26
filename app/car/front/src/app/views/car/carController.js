module.exports = function($http, $scope, dateService, Config) {
    $scope.title = 'Car Events'
    $scope.totalCount =0
    $scope.buttonTitle = 'new event'
    $scope.ymd= dateService.today
    $scope.init = function(){
        $scope.event_id = 1
        $scope.evnet_nm = '주유'        
        $scope.getList()
        $scope.isList = true;
    }
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
        $scope.event_nm = event_nm_array[event_id]
    }
    $scope.addClick = function(){
        console.log('add click')
        let url = Config.Server+'/car'
        let data = {
            ymd : $scope.ymd.replace(/-/g, ""),
            event_cd: $scope.event_id,
            event_nm: $scope.event_nm,
        }
        console.log(url, data)
        $http.post(url, JSON.stringify(data))
        .then(function(response){
            console.log(response)
            if(response.data.resultCode != 200){
                alert(response.data.resultMessage)
            }else{
                $scope.init()
            }
        }, function(error){
            alert(error.data.resultMessage) 
        })
    }
    $scope.getList = function(){
        $scope.list = $http.get(Config.Server + '/car/list')
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
    $scope.delete = function(id){
        console.log('delete id : ' + id)
        if(confirm('are you sure delete?') == false) return;
        $http.delete(Config.Server + '/car/' + id)
            .then(
                (response) => {
                    console.log(response)
                    $scope.init()
                },
                (error) =>{
                    console.error(error)
                }
            )
    }
    $scope.init()
}