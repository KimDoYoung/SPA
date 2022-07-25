//constant
//함수의 모음
// var util = {}; 

// util.today =  function (format){
//     var format = format || 'yyyy-MM-dd';
//     return '111';
// }
// util.diff = (startDate, endDate) => {
//     const _MS_PER_DAY = 1000 * 60 * 60 * 24;
//     var a = startDate instanceof Date ? startDate : new Date(util.displayDate(startDate));
//     var b = endDate instanceof Date ? endDate : new Date(util.displayDate(endDate));
//     // Discard the time and time-zone information.
//     const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
//     const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
//     return Math.floor((utc2 - utc1) / _MS_PER_DAY);
// // }
// function dateUtil(dateFilter){
//     var today = function(dateFilter){
//         return dateFilter( new Date(), 'yyyy-MM-dd');
//     }
//     return {
//         today : today(dateFilter)
//     };
// }  
// module.exports = dateUtil(dateFilter);


// module.exports = function(dateFilter) {
//     var today = dateFilter( new Date(), 'yyyy-MM-dd');
//     return {
//         today : today,
//         companyName : 'Kalpa Tech'
//     };
// }  
module.exports = {
    companyName : 'Kalpa Tech',
    program : {
        Version: '0.1'
    },
    SERVER : 'http://localhost:5000'
}