module.exports = function () {
    return {
        restrict: 'E',
        scope: {
            //  ymd : '='
        },
        compile: (tElement, tAttribute) => {
            console.log(tAttribute.ymd + ' in Compiler');
            return {
                pre: function (scope, iElement, iAttributes, controller) {
                    console.log(iAttributes.ymd + ' In Pre');
                },
                post: function (scope, iElement, iAttributes, controller) {
                    debugger;
                    console.log(iAttributes.ymd + ' In Post');
                }
            };
        },
        controller: (scope, element, attrs) => {
            console.log(attrs.ymd + ' In Controller');
        }
    };
};
