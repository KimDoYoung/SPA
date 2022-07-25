let app = require('../app_module')
app.filter('displayYmd', function(){
    return function(ymd, gubun){
        let y=ymd.substring(0,4)
        let m=ymd.substring(4,6)
        let d=ymd.substring(6)
        let g=gubun||'-'
        return `${y}${g}${m}${g}${d}`
    }
})
app.filter('ymdYoil', function(){
    return function(ymd){
        var y = parseInt(ymd.substr(0, 4));
        var m = parseInt(ymd.substr(4, 2));
        var d = parseInt(ymd.substr(6, 2));
        var week = new Array('일', '월', '화', '수', '목', '금', '토');
        let date1 = new Date(y, m - 1, d );
        return week[date1.getDay()]
    }
})