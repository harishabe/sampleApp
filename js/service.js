(function () {
    angular.module('testApp').factory('apiService', function ($http, $q) {
        return {
            getData: function (url, callback) {
                $http({
                    method: 'GET',
                    url: url,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (data) {
                    callback(data);
                }, function (err) {
                    callback(err);
                })
            },
            postData: function (url, data, callback) {
                $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (data) {
                    callback(data);
                }, function (err) {
                    callback(err);
                })
            },
            get: function (url) {
                var deferred = $q.defer();
                $http.get(url)
                    .then(function (response) {
                        deferred.resolve(response);
                    })
                    .catch(function (response) {
                        deferred.reject(response);
                    });
                return deferred.promise;
            },
            post: function (url, data) {
                var deferred = $q.defer();
                $http({
                    method: 'POST',
                    url: url,
                    data: data,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (response) {
                    deferred.resolve(response);
                })
                    .catch(function (response) {
                        deferred.reject(response);
                    });
                return deferred.promise;
            }
        }
    })
})();