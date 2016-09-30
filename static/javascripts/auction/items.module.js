(function () {
  'use strict';

  angular
    .module('auction.items', [
      'auction.items.controllers',
      'auction.room.controllers',
      'auction.items.services',
    ]);

  angular
    .module('auction.items.controllers', []);

  angular
    .module('auction.room.controllers', []);

  angular
    .module('auction.items.services', []);
})();
