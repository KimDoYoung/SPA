module.exports = function(dateFilter) {
    this.today  = dateFilter( new Date(), 'yyyy-MM-dd')
}