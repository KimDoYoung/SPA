module.exports = function () {
    const compile = (tElement, tAttribute) => {
        // console.log( '-------------')
        // console.log( $(tElement).find('input'))
        // console.log( '-------------')
    };
    // const link = (scope, element, attrs, controller, transcludeFn) => {
    //     // console.log('--------element.text:' + $(element).find('input').length)
    // };
    const controller = function ($scope) {
        this.initButtonClick = () => {
            console.log('init button clicked');
            $scope.keyword = '';
            $scope.initCallback();
        };
        this.searchButtonClick = (keyword) => {
            console.log('in directive, keyword: ' + $scope.keyword);
            $scope.searchCallback(keyword);
        };
    };
    const templateUrl = 'app/components/common/search.tpl.html';
    const controllerName = 'search';

    return {
        restrict: 'E',
        replace: true,
        scope: {
            placeholder: '@',
            isShowInitButton: '=',
            initCallback: '&',
            searchCallback: '&'
        },
        transclude: false,
        templateUrl: templateUrl,
        controllerAs: controllerName,
        compile: compile,
        // link: link,
        controller: controller
    };
};
