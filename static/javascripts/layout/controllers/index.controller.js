/**
 * IndexController
 * @namespace thinkster.layout.controllers
 */
(function () {
  'use strict';

  angular
    .module('thinkster.layout.controllers')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', 'Authentication', 'Items', 'Snackbar'];

  /**
   * @namespace IndexController
   */
  function IndexController($scope, Authentication, Items, Snackbar) {
    var vm = this;

    vm.isAuthenticated = Authentication.isAuthenticated();
    vm.items = [];

    activate();

    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf thinkster.layout.controllers.IndexController
     */
    function activate() {
      Items.all().then(successFn, errorFn);


      /**
       * @name itemsSuccessFn
       * @desc Update thoughts array on view
       */
      function successFn(data, status, headers, config) {
        vm.items = data.data;
      }


      /**
       * @name itemsErrorFn
       * @desc Show snackbar with error
       */
      function errorFn(data, status, headers, config) {
        Snackbar.error(data.error);
      }
    }
  }
})();
