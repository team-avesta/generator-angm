(function() {
    angular
        .module('validation.rule', ['validation'])
        .config(config);

    config.$inject = ['$validationProvider'];

    function config($validationProvider) {
        var expression = {
            required: function(value) {
                return !!value;
            },
            url: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/,
            email: /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
            number: /^\d+$/,
            lastsalsh: /\/$/,
            password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
            nocommalast: function(value) {
                return !(value.charAt(value.length - 1) === ',');
            },
            minlength: function(value, scope, element, attrs, param) {
                return !!value && value.length >= param;
            },
            maxlength: function(value, scope, element, attrs, param) {
                return !value || value.length <= param;
            },
            userid: /^[a-z\d,]*\.?[a-z\d,]*$/,
            numberemail: function(value, scope, element, attrs, param) {
                var email = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
                var number = /^\d+$/;
                if (email.test(value) || value.length == 10 && number.test(value)) {
                    return true;
                }
                return false;
            },
            matching: function(value, scope, element, attrs, param) {
                return !!attrs && value === attrs.matchingValue;
            }
        };


        var defaultMsg = {
            required: {
                error: 'This should be Required!!',
                success: 'It\'s Required'
            },
            url: {
                error: 'This should be Url',
                success: 'It\'s Url'
            },
            email: {
                error: 'This should be Email',
                success: 'It\'s Email'
            },
            number: {
                error: 'This should be Number',
                success: 'It\'s Number'
            },
            password: {
                error: 'Should br password',
                success: 'It\'s Password'
            },
            lastsalsh: {
                error: 'Last character should be /',
                success: 'It\'s /'
            },
            nocommalast: {
                error: 'Last character should not be ,',
                success: 'It\'s ,'
            },
            minlength: {
                error: 'This should be longer',
                success: 'Long enough!'
            },
            maxlength: {
                error: 'This should be shorter',
                success: 'Short enough!'
            },
            userid: {
                error: 'Only "." is allowed',
                success: 'Success!'
            },
            numberemail: {
                error: 'This should be number or email',
                success: 'Success!'
            },
            matching: {
                error: 'Not matching',
                success: 'Matching!'
            }
        };
        $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
        // to hide default success messages
        $validationProvider.showSuccessMessage = false;
    }
}).call(this);
