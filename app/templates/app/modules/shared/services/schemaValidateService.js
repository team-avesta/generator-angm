angular
	.module('shared')
	.factory('schemaValidateService', service)


function service($injector) {
	var validationProvider = $injector.get('$validation');
	var expression = validationProvider.getExpression;

	var service = {
		validate: validate
	};

	return service;

	//////////////////////

	function validate(fields, schema) {
		var validations;
		var validationFunc;
		var param;
		var result;
		var success = true;
		var error;
		var stop = false;

		for (var key in fields) {
			if (fields.hasOwnProperty(key) && !stop) {
				validations = schema[key].validations.split(",");

				validations.forEach(function(val) {
					if (val.indexOf('=') != -1) {
						param = val.split('=')[1];
						val = val.split('=')[0];
					}
					validationFunc = expression(val);
					if (typeof validationFunc === 'function') {
						result = validationFunc(fields[key], 'scope', 'element', 'attrs', param);
					} else {
						result = validationFunc.test(fields[key]);
					}

					if (!result && !stop) {
						success = false;
						error = schema[key].messages[val].error;
						stop = true;
					}


				});
			}
		}

		return {
			success: success,
			error: error
		}
	}
}
