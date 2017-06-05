(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('sidenavCtrl', controller)

    controller.$inject = ['$mdSidenav', '$state', '$scope'];

    function controller($mdSidenav, $state, $scope) {
        var vm = this;

        vm.sidemenu = [{
            id: 1,
            name: 'Layouts',
            icon: 'note_add',
            is_accordian: true,
            subMenu: [{
                id: 11,
                name: '1 Column',
                icon: 'view_stream',
                sref: 'dashboard.layouts.1column'
            }, {
                id: 12,
                name: '2 Column',
                icon: 'card_membership',
                sref: 'dashboard.layouts.2column'
            }, {
                id: 13,
                name: '3 Column',
                icon: 'view_stream',
                sref: 'dashboard.layouts.3column'
            }, {
                id: 14,
                name: 'Horizontal layouts',
                icon: 'person',
                sref: 'dashboard.layouts.horcenter'
            }, {
                id: 15,
                name: 'Vertical Center',
                icon: 'people',
                sref: 'dashboard.layouts.vercenter'
            }]
        }];

        vm.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };

        vm.closeSidenav = function() {
            $mdSidenav('left').close();
        };

        $scope.$on('$stateChangeSuccess', vm.closeSidenav);

        vm.onSelectMenu = function(menu) {
            $state.go(menu.sref);
        };
    }
})();
