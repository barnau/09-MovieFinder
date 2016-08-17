(function() {
    'use strict';

    angular
        .module('app')
        .controller('DetailsController', DetailsController);

    DetailsController.$inject = ['MovieFactory', '$stateParams'];

    /* @ngInject */
    function DetailsController(MovieFactory, $stateParams) {
        var vm = this;
        vm.title = 'DetailsController';
        vm.test = 'this is a test';

        vm.movieName = $stateParams.movieId;
        


        MovieFactory.getMovieDetailData(vm.movieName).then(
            function(response) {
                console.log(response.data);
                vm.movieDetails = response.data;

        });
        
        
        activate();

        ////////////////

        function activate() {
        }
    }
})();