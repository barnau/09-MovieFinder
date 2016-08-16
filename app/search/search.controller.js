(function() {
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['MovieFactory'];

    /* @ngInject */
    function SearchController(MovieFactory) {
        var vm = this;
        vm.title = 'SearchController';

        vm.test ="This is test data from search controller";
        vm.title = "";

        vm.searchForMovie = function(title) {

            MovieFactory.getMovieData(title).then(
            function(response) {

                vm.results = response.data;
                console.log(vm.results);

        });

        }

       
        
        
        activate();

        ////////////////

        function activate() {
        }
    }
})();