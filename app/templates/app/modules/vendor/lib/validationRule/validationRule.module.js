(function() {
    angular
        .module('validation.rule', ['validation'])
        .config('$validationProvider', config);

    config.$inject = ['$validationProvider'];

    function config($validationProvider) {
        var expression = {
            required: function(value) {
                return !!value;
            },
            url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
            email: /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
            number: /^\d+$/,
            lastsalsh: /\/$/,
            nocommalast: function(value) {
                return !(value.charAt(value.length - 1) === ',');
            },
            minlength: function(value, scope, element, attrs, param) {
                return value && value.length >= param;
            },
            maxlength: function(value, scope, element, attrs, param) {
                return !value || value.length <= param;
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
            }
        };
        $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
        // to hide default success messages
        $validationProvider.showSuccessMessage = false;
    }
}).call(this);
