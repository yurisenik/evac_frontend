/**
 * Created by suv on 01.09.16.
 */
'use strict';

angular.module('evacApp.data', ['evacApp.settings'])

    .factory('dataFactory', dataFactory);

dataFactory.$inject = ['$http', 'settings'];
function dataFactory($http, settings) {

    var factory = {
        getItems: getItems
    }

    return factory;
    
    function getItems() {
        return $http.get(settings.itemsUrl);
    }

}
