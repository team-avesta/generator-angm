(function() {
    'use strict';
    angular.module('shared')
        .factory('pubSubService', service);

    function service() {
        var cache = {};

        var service = {
            publish: publish,
            subscribe: subscribe,
            unsubscribe: unsubscribe
        };

        return service;

        //////////////////////////

        function subscribe(topic, callback) {
            if (!cache[topic]) {
                cache[topic] = [];
            }
            cache[topic].push(callback);
            return [topic, callback];
        }

        function publish(topic, args) {
            cache[topic] && angular.forEach(cache[topic],
                function(callback) {
                    callback.apply(null, args || []); // eslint-disable-line angular/avoid-scope-typos
                });
        }

        function unsubscribe(handle) {
            var t = handle[0];
            if (cache[t]) {
                for (var x = 0; x < cache[t].length; x++) {
                    if (cache[t][x] === handle[1]) {
                        cache[t].splice(x, 1);
                    }
                }
            }
        }
    }
})();
