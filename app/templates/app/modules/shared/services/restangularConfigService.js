angular
	.module('shared')
	.factory('restangularConfigService', service)


function service(Restangular, toastService) {

	var restangular = {
		init: init
	};
	init();
	return restangular;

	//////////////////////

	function init() {
		Restangular.setBaseUrl('http://localhost:3000/api');
		//Restangular.setBaseUrl('api');
		Restangular.setErrorInterceptor(function(response, deferred, responseHandler) {
			var errorObj = { message: 'Something went wrong.' };
			if (response.status === -1) {
				toastService.failureToast(errorObj);
			} else if (response.data.message) {
				toastService.failureToast(response.data)
			} else {
				toastService.failureToast(errorObj);
			}
			return false; // error not handled
		});

		Restangular.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
			if (data.message) {
				data.success ? toastService.successToast(data) : toastService.failureToast(data)
			}
			if (!data.success) {
				deferred.reject(data.message);
			}
			return data;
		});

		Restangular.addFullRequestInterceptor(function(headers, params, element, httpConfig) {

			return {
				httpConfig: { apiMock: false }
			}
		});
	}

}
