module.exports = () => {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'app/components/layout/footer.tpl.html',
        compile: (tElement, tAttribute) => {
            console.log(tAttribute.text + ' in Compiler');
            return {
                pre: function (scope, iElement, iAttributes, controller) {
                    console.log(iAttributes.text + ' In Pre');
                },
                post: function (scope, iElement, iAttributes, controller) {
                    console.log(iAttributes.text + ' In Post');
                }
            };
        },
        controller: (scope, element, attrs) => {
            console.log(attrs.text + ' In Controller');
        }
    };
};
