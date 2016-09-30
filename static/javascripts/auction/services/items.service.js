/**
 * Items
 * @namespace auction.items.services
 */
(function () {
  'use strict';

  angular
    .module('auction.items.services')
    .factory('Items', Items);

  Items.$inject = ['$http'];

  /**
   * @namespace Items
   * @returns {Factory}
   */
  function Items($http) {
    var Items = {
      all: all,
      get: get,
      getByBidder: getByBidder,
      create: create
    };

    return Items;

    ////////////////////
    /**
     * @name all
     * @desc Get all Items
     * @returns {Promise}
     * @memberOf auction.items.services.Items
     */
    function all() {
      return $http.get('/api/v1/items/');
    }


    /**
     * @name create
     * @desc Create a new Post
     * @param {string} name The name of the new Item
     * @param {string} description The description of the new Item
     * @param {string} image The image of the new Item
     * @param {string} start_time The start_time of the new Item
     * @param {string} stop_time The stop_time of the new Item
     * @param {string} start_price The start_price of the new Item
     * @param {string} bid_range The bid_range of the new Item
     * @returns {Promise}
     * @memberOf auction.items.services.Items
     */
    function create(name, description, image, start_time, stop_time, start_price, bid_range) {
      return $http.post('/api/v1/items/', {
        name: name,
        description: description,
        image: image,
        start_time: start_time,
        stop_time: stop_time,
        start_price: start_price,
        bid_range: bid_range,
      });
    }


    /**
     * @name get
     * @desc Get the Item of a given id
     * @param {integer} id The id to get Item by
     * @returns {Promise}
     * @memberOf auction.item.services.Items
     */
    function get(id) {
      return $http.get('/api/v1/items/' + id + '/');
    }

    /**
     * @name getByBidder
     * @desc Get the Items of a given user
     * @param {string} username The username to get Items for
     * @returns {Promise}
     * @memberOf auction.item.services.Items
     */
    function getByBidder(username) {
      return $http.get('/api/v1/items/' + username + '/items/');
    }
  }
})();
