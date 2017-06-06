(function() {
    'use strict';

    angular
        .module('shared')
        .factory('fileReaderService', service);

    function service() {

        return {
            //readAsDataUrl: readAsDataURL
        };

        ////////////////////

        function onLoad(reader, deferred, scope) {
            return function() {
                scope.$apply(function() {
                    deferred.resolve(reader.result);
                });
            };
        }

        function onError(reader, deferred, scope) {
            return function() {
                scope.$apply(function() {
                    deferred.reject(reader.result);
                });
            };
        }

        function onProgress(reader, scope) {
            return function(event) {
                scope.$broadcast("fileProgress", {
                    total: event.total,
                    loaded: event.loaded
                });
            };
        }

        function getReader(deferred, scope) {
            var reader = new FileReader();
            reader.onload = onLoad(reader, deferred, scope);
            reader.onerror = onError(reader, deferred, scope);
            reader.onprogress = onProgress(reader, scope);
            return reader;
        }

        /*var readAsDataURL = function(file, scope) {
            var deferred = $q.defer();
            var Extension = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
            var Size = file.size;

            if (Extension == "jpeg" || Extension == "jpg") {
                if (Size < 100000) {
                    var reader = getReader(deferred, scope);
                    reader.readAsDataURL(file);
                } else {
                    deferred.reject("Image size must be less than 100kb.");
                }
            } else {
                deferred.reject("Image type should be JPG or JPEG. ");
            }
            return deferred.promise;
        };*/



    }

})();
