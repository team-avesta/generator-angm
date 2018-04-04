(function() {
	'use strict';
	angular
		.module('shared')
		.factory('restangularConfigService', service)


	function service(Restangular, toastService, pubSubService, eventsConstantService, authService) {
		var service = {
			//methods
			init: init,
			showErrorMessage: showErrorMessage
		};

		return service;

		//////////////////////

		function init() {
			Restangular.setBaseUrl('api');
			//Restangular.setBaseUrl('https://dart-staging.shreeapp.com/api');
			Restangular.setErrorInterceptor(function(response, deferred, responseHandler) {
				//in case of any 401 error code redirect to login page
				if (response.status === 401 || response.status === 403) {
					authService.redirectToLogin();
					return true;
				}
				pubSubService.publish(eventsConstantService.message._HIDE_LOADING_SPINNER_);
				var errorObj = {
					message: 'Something went wrong.'
				};
				if (response.status === -1) {
					service.showErrorMessage(errorObj);
				} else if (response.data && response.data.message) {
					service.showErrorMessage(response.data);
				} else {
					service.showErrorMessage(errorObj);
				}
				return true; // error not handled
			});

			Restangular.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
				pubSubService.publish(eventsConstantService.message._HIDE_LOADING_SPINNER_);
				if (data.message && !data.isDialog) {
					data.success ? toastService.successToast(data) : toastService.failureToast(data);
				}
				if (!data.success && data.isDialog) {
					return deferred.reject(data);
				} else if (!data.success) {
					return deferred.reject(data.message);
				}
				return deferred.resolve(data.data);
			});

			Restangular.addFullRequestInterceptor(function(element, operation, path, url, headers, params, httpConfig) {
				//var x_auth_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTA0LCJyb2xlX2lkcyI6WzFdLCJyb2xlX2NvZGVzIjpbIjAwMSJdLCJuYW1lIjoiTmFyZXNoIFRhbmsiLCJ1c2VyX2lkIjoiMDAxIiwiY2VudGVyX2lkIjpudWxsLCJjZW50ZXJfbmFtZSI6bnVsbCwiaWF0IjoxNTIyMDY0NDA5LCJleHAiOjE1MjIxNTA4MDl9.MueWP5plrrJSeHUbGNs12TKHLLKwS850RtjiXw2cSnM'
				var x_auth_token = authService.getAuthToken();
				Restangular.setDefaultHeaders({
					'x-auth-token': x_auth_token
				});
				pubSubService.publish(eventsConstantService.message._SHOW_LOADING_SPINNER_);
				return httpConfig;
			});
		}

		function showErrorMessage(data) {
			pubSubService.publish(eventsConstantService.message._ADD_ERROR_MESSAGE_, [data]);
		}
	}
})();
