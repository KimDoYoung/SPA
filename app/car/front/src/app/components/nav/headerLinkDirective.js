module.exports = () => {
    return {
        restrict : 'E',
        transclude: false,
        replace : true,
        scope : {
            // title :'@'
        },
        templateUrl :'app/components/nav/headerLink.tpl.html'
    }
}