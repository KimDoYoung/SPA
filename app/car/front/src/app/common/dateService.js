module.exports = function (dateFilter) {
    this.today = dateFilter(new Date(), 'yyyy-MM-dd');
    this.diffDays = (futureDate, pastDate) => {
        let difference = futureDate.getTime() - pastDate.getTime();
        let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
        return TotalDays;
    };
};
