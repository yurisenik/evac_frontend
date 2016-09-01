'use strict';

angular.module('evacApp.mapView', [
    'ngRoute',
    'leaflet-directive',
    'evacApp.settings',
    'evacApp.data'
])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/mapView', {
            templateUrl: 'mapView/mapView.html',
            controller: 'MapViewCtrl',
            controllerAs: 'vm'
        });
    }])

    .controller('MapViewCtrl', MapViewCtrl);

MapViewCtrl.$inject = ['settings', 'dataFactory'];
function MapViewCtrl(settings, dataFactory) {
    var vm = this;

    vm.center = {
        lat: 45.042,
        lng: 39,
        zoom: 12
    };

    vm.markers = {};
    dataFactory.getItems()
        .success(function (data) {
            vm.markers = data;
        });

    vm.layers = {
        baselayers: {
            yandex: {
                name: 'Yandex',
                type: 'yandex',
                layerOptions: {
                    layerType: 'map',
                }
            },
            yandexTraffic: {
                name: 'Yandex Traffic',
                type: 'yandex',
                layerOptions: {
                    layerType: 'map',
                    traffic: true,
                }
            }
        }
    };

}