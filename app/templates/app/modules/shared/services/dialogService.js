(function() {
	'use strict';
	angular.module('shared')
		.factory('dialogService', service);

	function service($mdDialog, pubSubService, eventsConstantService, $document, $q) {
		var messageText = '';
		var displayType = 'popup';

		var dialog = {
			init: init,
			displayDialogHandler: displayDialogHandler,
			showPopupDialog: showPopupDialog,
			showPopupDialogWithPromise: showPopupDialogWithPromise,
			showConfirmationDialog: showConfirmationDialog,
			confirmDelete: confirmDelete
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
					//pubSubService.publish(eventsConstantService.message._DISPLAY_POPUP_, [messageText]);
					dialog.showPopupDialog(data.title, data.msg);
					break;
				case 'confirmation':
					//pubSubService.publish(eventsConstantService.message._DISPLAY_CONFIRMATION_DIALOG_, [messageText]);
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
			pubSubService.subscribe(eventsConstantService.message._DISPLAY_DIALOG_, dialog.displayDialogHandler);
		}

		function showPopupDialog(title, msg) {
			// Appending dialog to document.body to cover sidenav in docs app
			// Modal dialogs should fully cover application
			// to prevent interaction outside of dialog
			$mdDialog.show(
				$mdDialog.alert()
				//.parent(angular.element($document.querySelector('#popupContainer')))
				.clickOutsideToClose(true)
				.title(title)
				.content(msg)
				.ariaLabel(msg)
				.ok('OK')
			);
		}

		function showPopupDialogWithPromise(title, msg) {
			// Appending dialog to document.body to cover sidenav in docs app
			// Modal dialogs should fully cover application
			// to prevent interaction outside of dialog
			return $mdDialog.show(
				$mdDialog.alert()
				.parent(angular.element($document[0].querySelector('#popupContainer')))
				.clickOutsideToClose(true)
				.title(title)
				.content(msg)
				.ariaLabel(msg)
				.ok('OK')
			);
		}

		function showConfirmationDialog(title, msg, okBtn, cancelBtn, model) {
			return $q(function(resolve, reject) {
				var confirm = $mdDialog.confirm()
					.title(title)
					.content(msg)
					.ariaLabel(msg)
					.ok(okBtn)
					.cancel(cancelBtn);

				$mdDialog
					.show(confirm)
					.then(function() {
						resolve();
					}, function() {
						console.log('click cancel');
					});
			});
		}

		function confirmDelete(item) {
			return $q(function(resolve, reject) {
				var message = 'Are you sure you want to delete this ' + item + '?';
				var label = 'Delete';
				var confirmDialog = $mdDialog.confirm()
					.title('Confirm')
					.textContent(message)
					.ariaLabel(label)
					.ok('YES')
					.cancel('NO')
					//.targetEvent(ev)
					.clickOutsideToClose(false);

				var promise = $mdDialog.show(confirmDialog);
				promise.then(function() {
					resolve();
				}, function() {
					reject();
					console.log('click cancel');
				});
			});
		}
	}
})();
