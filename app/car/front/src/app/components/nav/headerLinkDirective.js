module.exports = () => {
    return {
        restrict : 'E',
        transclude: true,
        replace : true,
        scope : {
            // title :'@'
        },
        templateUrl :'app/components/nav/headerLink.tpl.html'
    }
}