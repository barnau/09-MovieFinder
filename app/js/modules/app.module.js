(function() {
    'use strict';

    angular
        .module('app', ['ui.router'])

        .config(function($stateProvider, $urlRouterProvider){
        	$urlRouterProvider.otherwise('/search');

        	$stateProvider
        	.state('search', {
        		url: '/search',
        		templateUrl: '/app/search/search.html',
        		controller: 'SearchController as search'
        	})
        	.state('details', {
        		url: '/details',
        		templateUrl: '/app/details/details.html',
        		controller: 'DetailsController as detail'
        	});

        });

})();