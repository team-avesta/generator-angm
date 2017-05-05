(function() {
    'use strict';
    angular.module('shared')
        .factory('dialogService', dialogService);

    function dialogService($mdDialog, pubSubService, events, $document) {
        var messageText = '';
        var displayType = 'popup';

        var dialog = {
            init: init,
            displayDialogHandler: displayDialogHandler,
            showPopupDialog: showPopupDialog,
            showConfirmationDialog: showConfirmationDialog
        };

        return dialog;

        //////////////////

        function displayDialogHandler(data) {
            messageText = data.msg;
            displayType = data.type;

            //data.msg is text message to display
            //data.type is display popup or confirm
            //data.okBtn is text for first button in dialog
            //data.cancelBtn is text for second button in dialog
            //data.model is data which u pass after confirm or any operatuion you further carry
            //$timeout(function() {
            switch (displayType) {
                case 'popup':
                    //pubSubService.publish(events.message._DISPLAY_POPUP_, [messageText]);
                    dialog.showPopupDialog(data.title, data.msg);
                    break;
                case 'confirmation':
                    //pubSubService.publish(events.message._DISPLAY_CONFIRMATION_DIALOG_, [messageText]);
                    dialog.showConfirmationDialog(data.title, data.msg, data.okBtn, data.cancelBtn, data.model);
                    break;
                default:
                    dialog.showPopupDialog(data.title, data.msg);
                    break;
            }
        }


        function init() {
            messageText = '';
            displayType = 'popup';
            pubSubService.subscribe(events.message._DISPLAY_DIALOG_, dialog.displayDialogHandler);
        }

        function showPopupDialog(title, msg) {
            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application
            // to prevent interaction outside of dialog
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element($document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title(title)
                .content(msg)
                .ariaLabel(msg)
                .ok('OK')
            );
        }

        function showConfirmationDialog(title, msg, okBtn, cancelBtn, model) {
            var confirm = $mdDialog.confirm()
                .title(title)
                .content(msg)
                .ariaLabel(msg)
                .ok(okBtn)
                .cancel(cancelBtn);

            $mdDialog
                .show(confirm)
                .then(function() {
                    pubSubService.publish(events.message._USER_RESPONDED_, [model]);
                }, function() {
                    console.log('click cancel');
                });
        }
    }
})();
