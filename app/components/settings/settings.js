/**
 * Created by suv on 29.08.16.
 */
'use strict';

angular.module('evacApp.settings', [])

    .factory('settings', settings);

function settings() {
    var itemsUrl = '/backend/api/get_last_n_items/100/'

    var service = {
        itemsUrl: itemsUrl
    };

    return service;
}
