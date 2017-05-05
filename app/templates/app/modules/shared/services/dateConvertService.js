(function() {
    'use strict';
    angular
        .module('shared')
        .factory('dateConvertService', dateConvertService);

    function dateConvertService() {

        var service = {
            convert: convert
        };

        function convert(dob) {

            var today = new Date(dob);
            //console.log(today)
            if (today === 'Invalid Date') {
                return null;
            }

            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();

            if (dd < 10) {
                dd = '0' + dd
            }

            if (mm < 10) {
                mm = '0' + mm
            }

            today = mm + '/' + dd + '/' + yyyy;
            return today;
        }

        return service;
    };
})();
