module.exports = function() {
    return {
        restrict : 'E',
        replace : true,
        transclude: false,
        scope : {
            // title :'@'
        },
        templateUrl :'app/components/layout/footer.tpl.html'
    }
}