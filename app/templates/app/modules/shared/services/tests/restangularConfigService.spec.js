(function() {
	'use strict';

	describe('restangular Service rules test', function() {
		var _Restangular = null;
		var	_errorInterceptor = null;
		var	_toastService = null;
		var	_responseInterceptor = null;
		var	q = null;
		var	sandbox = null;

		beforeEach(function() {
			module('agencyapp');
		});

		beforeEach(inject(function(Restangular, toastService, $q) {
			_Restangular = Restangular;
			_toastService = toastService;
			q = $q;
			_errorInterceptor = _Restangular.configuration.errorInterceptors[0];
			_responseInterceptor = _Restangular.configuration.responseInterceptors[0];
			// toastService = {
			//     successToast: function() {
			//       console.log('successToast');
			//     },
			//     failureToast: function() {
			//       console.log('failureToast');
			//     }
			//   }
			sandbox = sinon.sandbox.create();
		}));

		afterEach(function() {
			sandbox.restore();
		});

		it('canary test', function() {
			expect(true).to.be.eql(true);
		});

		it('addResponseInterceptor should registered to Restangular', function() {
			expect(_responseInterceptor).to.be.an.instanceof(Function);
		});

		it('addResponseInterceptor should call toastService.successToast if data.message is there and data.success is true', function() {
			var successToastSpy = sandbox.spy(_toastService, 'successToast');
			var data = {
				success: true,
				message: 'success message'
			}
			_responseInterceptor(data);
			sinon.assert.calledOnce(successToastSpy);
		});

		it('addResponseInterceptor should call toastService.failureToast if data.message is there and data.success is false', function() {
			var failureToastSpy = sandbox.spy(_toastService, 'failureToast');
			var deferred = q.defer();
			var data = {
				success: false,
				message: 'failure message'
			}
			_responseInterceptor(data, 'operation', 'what', 'url', 'response', deferred);
			sinon.assert.calledOnce(failureToastSpy);
		});

		it('addResponseInterceptor should call deferred.reject if data.success is false', function() {
			var deferred = q.defer();
			var deferredSpy = sandbox.spy(deferred, 'reject');
			var data = {
				success: false,
				message: 'failure message'
			}
			_responseInterceptor(data, 'operation', 'what', 'url', 'response', deferred);
			sinon.assert.calledOnce(deferredSpy);
		});

		it('addResponseInterceptor should not call deferred.reject if data.success is true', function() {
			var deferred = q.defer();
			var deferredSpy = sandbox.spy(deferred, 'reject');
			var data = {
				success: true,
				message: 'success message'
			}
			_responseInterceptor(data, 'operation', 'what', 'url', 'response', deferred);
			sinon.assert.notCalled(deferredSpy);
		});

		it('addResponseInterceptor should call deferred.reject with data.message if data.success is false', function() {
			var deferred = q.defer();
			var deferredSpy = sandbox.spy(deferred, 'reject');
			var data = {
				success: false,
				message: 'failure message'
			}
			_responseInterceptor(data, 'operation', 'what', 'url', 'response', deferred);
			sinon.assert.calledOnce(deferredSpy);
			sinon.assert.calledWith(deferredSpy, 'failure message');
		});

		it('addResponseInterceptor should return data if success is true', function() {
			var data = {
				success: true,
				message: 'success message'
			}
			var result = _responseInterceptor(data, 'operation', 'what', 'url', 'response');
			expect(result).to.be.equal(data);
		});

		it('setErrorInterceptor should call toastService.failureToast if called without params', function() {
			var failureToastSpy = sandbox.spy(_toastService, 'failureToast');
			_errorInterceptor({});
			sinon.assert.calledOnce(failureToastSpy);
		});

		it('setErrorInterceptor should call toastService.failureToast if called without params', function() {
			var failureToastSpy = sandbox.spy(_toastService, 'failureToast');
			_errorInterceptor({});
			sinon.assert.calledOnce(failureToastSpy);
		});

		it('setErrorInterceptor should call toastService.failureToast with errorObj if called without params', function() {
			var failureToastSpy = sandbox.spy(_toastService, 'failureToast');
			var errorObj = { message: 'Something went wrong.' };
			_errorInterceptor({});
			sinon.assert.calledOnce(failureToastSpy);
			sinon.assert.calledWith(failureToastSpy, errorObj);
		});

		it('setErrorInterceptor should call toastService.failureToast with errorObj if called with status -1', function() {
			var failureToastSpy = sandbox.spy(_toastService, 'failureToast');
			var errorObj = { message: 'Something went wrong.' };
			_errorInterceptor({ status: -1 });
			sinon.assert.calledOnce(failureToastSpy);
			sinon.assert.calledWith(failureToastSpy, errorObj);
		});

		it('setErrorInterceptor should call toastService.failureToast with errorObj if called with status -1', function() {
			var failureToastSpy = sandbox.spy(_toastService, 'failureToast');
			var errorObj = { message: 'Something went wrong.' };
			_errorInterceptor({ status: -1 });
			sinon.assert.calledOnce(failureToastSpy);
			sinon.assert.calledWith(failureToastSpy, errorObj);
		});

		it('setErrorInterceptor should return false with watever params it calls', function() {
			var result = _errorInterceptor({});
			expect(result).to.be.false;
		});
	});
})();
