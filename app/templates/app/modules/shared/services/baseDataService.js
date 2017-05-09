(function() {
    'use strict';
    angular.module('shared').factory('baseDataService', service);

    function service($http, config, $q, pubSubService, events) {

        var serverUrl = config.serverUrl;
        var service = {
            post: postData,
            put: putData,
            delete: deleteData,
            get: getData,
            startLoader: startLoader,
            toastDisplay: toastDisplay
        };

        return service;

        /////////////////////////

        function postData(endpoint, data, isDialog) {
            service.startLoader(isDialog);
            return $q(function(resolve, reject) {
                $http({
                    method: 'POST',
                    url: serverUrl + endpoint,
                    data: angular.toJson(data),
                    cache: false
                }).then(function(res) {
                    if (!service.toastDisplay(res)) {
                        reject(res);
                        return;
                    }
                    resolve(res);
                }, function(d) {
                    errorCall(d, reject);
                });
            });
        }

        function putData(endpoint, data, isDialog) {
            service.startLoader(isDialog);
            return $q(function(resolve, reject) {
                $http({
                    method: 'PUT',
                    url: serverUrl + endpoint,
                    data: angular.toJson(data),
                    cache: false
                }).then(function(res) {
                    if (!service.toastDisplay(res)) {
                        reject(res);
                        return;
                    }
                    resolve(res);
                }, function(d) {
                    errorCall(d, reject);
                });
            });
        }

        function deleteData(endpoint, data, isDialog) {
            service.startLoader(isDialog);
            return $q(function(resolve, reject) {
                $http({
                    method: 'DELETE',
                    url: serverUrl + endpoint + '?id=' + data.id,
                    // data: angular.toJson(data),
                    cache: false
                }).then(function(res) {
                    if (!service.toastDisplay(res)) {
                        reject(res);
                        return;
                    }
                    resolve(res);
                }, function(d) {
                    errorCall(d, reject);
                });
            });
        }

        function getData(endpoint, data, isDialog) {
            service.startLoader(isDialog);
            return $q(function(resolve, reject) {

                $http
                    .get(serverUrl + endpoint + '?_dc=' + new Date().getTime(), {}, {
                        headers: {
                            'Cache-Control': 'no-cache'
                        }
                    }).then(function(res) {
                        if (!service.toastDisplay(res)) {
                            reject(res);
                            return;
                        }
                        resolve(res);
                    }, function(d) {
                        errorCall(d, reject);
                    });
            });
        }

        function startLoader(isDialog) {
            if (isDialog) {
                pubSubService.publish(events.message._SHOW_DIALOG_LOADING_SPINNER_, []);
            } else {
                pubSubService.publish(events.message._SHOW_LOADING_SPINNER_, []);
            }
        }

        function toastDisplay(res) {
            pubSubService.publish(events.message._HIDE_LOADING_SPINNER_, []);
            pubSubService.publish(events.message._HIDE_DIALOG_LOADING_SPINNER_, []);

            var obj = res.data;
            // if (obj.code == 440) { ///440 is session failure code
            //   $state.go('login');
            // }
            if (!obj.Success) {
                pubSubService.publish(events.message._ADD_ERROR_MESSAGE_, [{
                    message: obj.message,
                    type: 'toast'
                }]);
                return false;
            }
            return true;
        }

        function errorCall(d, reject) {
            pubSubService.publish(events.message._HIDE_LOADING_SPINNER_, []);
            pubSubService.publish(events.message._HIDE_DIALOG_LOADING_SPINNER_, []);

            var obj = d.data;
            if (obj) {
                pubSubService.publish(events.message._ADD_ERROR_MESSAGE_, [{
                    message: obj.message ? obj.message : 'please contact administrator for more information.',
                    type: 'toast',
                    status: d.status
                }]);
            }
            reject(d);
        }
    }
})();
