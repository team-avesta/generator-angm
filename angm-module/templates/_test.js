(function() {
    'use strict';

    describe('<%= slugifiedName %> test', function() {
        var controller = null,
            $scope = null;

        beforeEach(function() {
            module('<%= nameApp %>');
        });

        beforeEach(inject(function($controller, $rootScope) {
            $scope = $rootScope.$new();
            controller = $controller('<%= slugifiedNameCapitalize %>Ctrl', {
                $scope: $scope
            });
        }));

        it('canary test', function() {
            expect(true).to.be.eql(true);
        });

    });
})();
