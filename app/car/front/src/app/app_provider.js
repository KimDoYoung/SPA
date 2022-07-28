module.exports = function () {
    const baseUrl = 'http://jskn.iptime.org:8282/api';
    this.$get = function ($http, $log) {
        let services = {};
        services.getEmployees = function () {
            return $http({
                url: baseUrl + '/users',
                method: 'GET'
            });
        };
        return services;
    };
};
