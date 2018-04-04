/**
 * author - Chirag
 * created on - 28-06-2017
 * The service has methods that compares logged In user's policies with the policies that are
 * required to access the state. If the user has atleast one of the policy from the policies to
 * access the state, user can view the state.
 * Example usage: Include following where routes are defined:
 * $stateProvider
 *
		.state('home', {
			url: '/home',
			templateUrl: '/home.html',
			requiresAuthentication: true,
			policies: ['programmes.all', 'programmes.read']
		})

	Here ['programmes.all', 'programmes.read'] are required policies to access the state home. If
	user has any one of the above policy, he/she can access the state home.
 */
(function() {
	'use strict';
	angular.module('shared')
		.factory('authService', service);

	function service(Restangular, $q, $localStorage, dialogService, $window) {
		var logoutAPI = Restangular.all('authentication/logout');
		var loginAPI = Restangular.all('authentication/login');
		var user = {};
		var userPolicies = [];

		var service = {
			user: user,
			userPolicies: userPolicies,
			getAuthToken: getAuthToken,
			setAuthToken: setAuthToken,
			removeAuthToken: removeAuthToken,
			checkPoliciesForView: checkPoliciesForView,
			userHasPoliciesForView: userHasPoliciesForView,
			userHasPolicy: userHasPolicy,
			logout: logout,
			redirectToLogin: redirectToLogin,
			getLoginURL: getLoginURL,
			getUser: getUser,
			setUser: setUser,
			loadUserFromToken: loadUserFromToken
		};

		return service;

		function removeAuthToken(x_auth_token) {
			delete $localStorage.x_auth_token;
		}

		function getAuthToken() {
			if ($localStorage.x_auth_token) {
				return JSON.parse($localStorage.x_auth_token);
			} else {
				return null;
			}
		}

		function checkPoliciesForView(view) {
			if (!view.requiresAuthentication) {
				return true;
			}

			return service.userHasPoliciesForView(view);
		}

		function userHasPoliciesForView(view) {
			if (!view.policies || !view.policies.length) {
				return true;
			}

			return service.userHasPolicy(view.policies);
		}

		function userHasPolicy(policies) {
			var found = false;

			angular.forEach(policies, function(policy, index) {
				if (service.userPolicies.policies.indexOf(policy) >= 0) {
					found = true;
				}
			});

			return found;
		}

		function setAuthToken(x_auth_token) {
			service.removeAuthToken(x_auth_token);
			$localStorage.x_auth_token = angular.toJson(x_auth_token);
		}

		function logout() {
			return $q(function(resolve, reject) {
				logoutAPI.post().then(function(res) {
					service.removeAuthToken($localStorage.x_auth_token);
					resolve(res);
				}, function(err) {
					reject();
				});
			});
		}

		function getLoginURL() {
			return $q(function(resolve, reject) {
				loginAPI.customGET('loginURL').then(function(res) {
					resolve(res);
				}, function(err) {
					reject();
				});
			});
		}

		function redirectToLogin() {
			if (service.unauthorized) {
				return;
			}
			service.unauthorized = true;
			dialogService.showPopupDialogWithPromise('Unauthorized', 'Your session has been expired. Please login to continue.').then(function() {
				service.getLoginURL().then(function(res) {
					return $window.location = res.redirect_url;
				});
			});
		}

		function getUser() {
			return angular.copy(service.user);
		}

		function setUser(val) {
			service.user = val;
		}

		function loadUserFromToken() {
			//var x_auth_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTA0LCJyb2xlX2lkcyI6WzFdLCJyb2xlX2NvZGVzIjpbIjAwMSJdLCJuYW1lIjoiTmFyZXNoIFRhbmsiLCJ1c2VyX2lkIjoiMDAxIiwiY2VudGVyX2lkIjpudWxsLCJpYXQiOjE1MTk2MjM0ODIsImV4cCI6MTUxOTcwOTg4Mn0.IBmjoB_Xc7YZOAEObICV9GyXkXVkJ2F8ogZgfVqEXJo'

			var x_auth_token = service.getAuthToken();
			if (x_auth_token) {
				var base64Url = x_auth_token.split('.')[1];
				var base64 = base64Url.replace('-', '+').replace('_', '/');
				service.setUser(JSON.parse($window.atob(base64)));
			}
		}

	}
})();
