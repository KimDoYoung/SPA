module.exports = function ($interval, dateFilter) {
    function link(scope, element, attrs, controller, transcludeFn) {
        let timerId;
        let format = 'yyyy-MM-dd hh:mm:ss a';
        console.log('11' + attrs.currentTime);
        format = attrs.currentTime || format;
        function updateTime() {
            element.text(dateFilter(new Date(), format));
        }
        element.on('$destroy', function () {
            $interval.cancel(timerId);
        });
        timerId = $interval(function () {
            updateTime();
        }, 1000);
    }
    return {
        link: link
    };
};
