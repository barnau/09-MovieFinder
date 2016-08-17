(function() {
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['MovieFactory', 'toastr' ];

    /* @ngInject */
    function SearchController(MovieFactory, toastr) {
        var vm = this;
        vm.title = 'SearchController';

        vm.test ="This is test data from search controller";
        vm.movieTitle = "";

        vm.searchForMovie = function(movieTitle) {

            MovieFactory.getMovieData(movieTitle).then(
            function(response) {

                if(response.data.Response === "False") {
                    toastr.error('Could not find a movie by that name.', 'Error'); 
                

                } else {
                   vm.results = response.data;
                    console.log(vm.results);
                }

        });

        }

       
        
        
        activate();

        ////////////////

        function activate() {
        }
    }
})();