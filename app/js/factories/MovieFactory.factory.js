(function() {
    'use strict';

    angular
        .module('app')
        .factory('MovieFactory', MovieFactory);

    MovieFactory.$inject = ['$http'];

    /* @ngInject */
    function MovieFactory($http) {
        var service = {
            getMovieData: getMovieData,
            getMovieDetailData: getMovieDetailData
        };
        return service;

        ////////////////
        

        function getMovieData(title) {
        	return $http.get('http://www.omdbapi.com/?s=' + title + '&r=json');
        };

        function getMovieDetailData(title) {
            return $http.get('http://www.omdbapi.com/?t=' + title + '&r=json');
        }
    }
})();

