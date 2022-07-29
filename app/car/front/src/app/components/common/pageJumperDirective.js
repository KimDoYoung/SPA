module.exports = function (pageJumperService) {
    const templateUrl = 'app/components/common/pageJumper.tpl.html';
    const controllerName = 'pageJumper';
    const controller = function ($scope) {
        //초기값
        $scope.pageSize = $scope.pageSize || 10;
        $scope.pagerSize = $scope.pagerSize || 10;
        $scope.currentPageNumber = $scope.currentPageNumber || 1;
        $scope.totalItemCount = $scope.totalItemCount || 0;

        let jumper = pageJumperService.getJumper($scope.totalItemCount, $scope.pageSize, $scope.currentPageNumber, $scope.pagerSize);
        $scope.jumper = jumper;
        $scope.$watch('totalItemCount', (newValue, oldValue) => {
            console.log(newValue, '  ', oldValue);
            if (newValue != oldValue) {
                let jumper = pageJumperService.getJumper(newValue, $scope.pageSize, $scope.currentPageNumber, $scope.pagerSize);
                $scope.jumper = jumper;
            }
        });
        this.pagerClick = () => {
            console.log('pager button clicked');
            // $scope.keyword = '';
            // $scope.initCallback();
        };
        this.prevPageClick = () => {
            console.log('in directive, keyword: ' + $scope.keyword);
            // $scope.searchCallback(keyword);
        };
    };
    return {
        restrict: 'E',
        replace: true,
        transclude: false,
        scope: {
            totalItemCount: '=',
            pageSize: '=',
            pagerSize: '=',
            currentPageNumber: '='
        },
        templateUrl: templateUrl,
        controller: controller,
        controllerAs: controllerName
    };
};
