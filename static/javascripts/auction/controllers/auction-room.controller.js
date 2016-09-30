/**
* AuctionRoomController
* @namespace auction.room.controllers
*/
(function () {
  'use strict';

  angular
    .module('auction.room.controllers')
    .controller('AuctionRoomController', AuctionRoomController);

  AuctionRoomController.$inject = ['$location', '$routeParams', 'Items', 'Snackbar'];

  /**
  * @namespace AuctionRoomController
  */
  function AuctionRoomController($location, $routeParams, Items, Snackbar) {
    var vm = this;

    activate();

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf thinkster.accounts.controllers.AccountController
    */
    function activate() {

      Items.get($routeParams.id).then(successFn, errorFn);


      /**
        * @name postsSucessFn
        * @desc Update `posts` on viewmodel
        */
      function successFn(data, status, headers, config) {
        vm.item = data.data;
      }


      /**
        * @name postsErrorFn
        * @desc Show error snackbar
        */
      function errorFn(data, status, headers, config) {
        Snackbar.error(data.data.error);
      }
    }
  }
})();
