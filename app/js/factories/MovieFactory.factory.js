(function() {
    'use strict';

    angular
        .module('app')
        .factory('MovieFactory', MovieFactory);

    MovieFactory.$inject = ['$http','$stateParams'];

    /* @ngInject */
    function MovieFactory($http, $stateParams) {
        var service = {
            getMovieData: getMovieData,
            getMovieDetailData: getMovieDetailData
        };
        return service;

        ////////////////
        

        function getMovieData(title) {
        	return $http.get('http://www.omdbapi.com/?s=' + title + '&r=json');
        };

        function getMovieDetailData($stateParams) {
            return $http.get('http://www.omdbapi.com/?t=' + $stateParams.movieId + '&r=json');
        }
    }
})();

