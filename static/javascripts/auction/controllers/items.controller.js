/**
 * ItemsController
 * @namespace auction.items.controllers
 */
(function () {
  'use strict';

  angular
    .module('auction.items.controllers')
    .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['$scope', 'Items'];

  /**
   * @namespace ItemsController
   */
  function ItemsController($scope) {
    var vm = this;
    vm.items = [];
    activate();


    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf auction.items.controllers.ItemsController
     */
    function activate() {
      Items.all().then(successFn, errorFn);

      function successFn(data, status, headers, config) {
        vm.items = data.data;
      }

      function errorFn(data, status, headers, config) {
        Snackbar.error(data.error);
      }
    }
  }
})();
