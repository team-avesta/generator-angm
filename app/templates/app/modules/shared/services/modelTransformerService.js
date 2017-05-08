angular
    .module('shared')
    .factory('modelTransformerService', service)


function service() {

    var modelTransformer = {
        transform: transformResult,
        transformObject: transformObject
    };

    return modelTransformer;

    //////////////////////

    function transformResult(jsonResult, constructor) {
        var model = new constructor();
        angular.extend(model, jsonResult);
        return model;
    }

    function transformObject(jsonResult, constructor) {
        if (angular.isArray(jsonResult)) {
            var models = [];
            angular.forEach(jsonResult, function(object) {
                models.push(modelTransformer.transformObject(object, constructor));
            });
            return models;
        } else {
            return modelTransformer.transformObject(jsonResult, constructor);
        }
    }
}
