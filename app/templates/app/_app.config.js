(function() {
    'use strict';

    angular // eslint-disable-line angular/component-limit
        .module('<%= slugifiedAppName %>')
        .config(configure)
        .run(runBlock);

    configure.$inject = ['$urlRouterProvider', '$locationProvider', '$httpProvider', '$mdAriaProvider', '$mdThemingProvider'];

    function configure($urlRouterProvider, $locationProvider, $httpProvider,  $mdAriaProvider, $mdThemingProvider) {
        $mdAriaProvider.disableWarnings();
		$mdThemingProvider.theme('default')
			.primaryPalette('light-blue', {
				'default': '600',
			})
			.accentPalette('green', {
				'default': '500',
				/*'hue-1': '400', // use shade 100 for the <code>md-hue-1</code> class
				'hue-2': '500', // use shade 600 for the <code>md-hue-2</code> class
				'hue-3': '600' //*/
			});

        $locationProvider.hashPrefix('!');

        // This is required for Browser Sync to work poperly
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

        <% if (angularMaterial) { %>
        $urlRouterProvider
            .otherwise('/home');
        <% } else { %>
        $urlRouterProvider
            .otherwise('/');
        <% } %>
    }

    <% if (policyBasedAuth) { %>
    runBlock.$inject = ['authService', '$transitions'];
    <% } else { %>
    runBlock.$inject = [];
    <% } %>

    <% if (policyBasedAuth) { %>

    function runBlock(authService, $transitions) {
        'use strict';

        // Listens for before state change event; passes required policies to acces the state &
        // matches with the policies of the logged In user, if a match is found, user is allowed
        // to visit the state else redirect him/her to the login page.
        $transitions.onBefore({}, function($transitions) {
            var newToState = $transitions.$to();
            if (!authService.checkPoliciesForView(newToState.self)) {
                event.preventDefault();
                // redirect to login
            }
        });
    }
    <% } else { %>

    function runBlock() {
        'use strict';
    }
    <% } %>

})();
