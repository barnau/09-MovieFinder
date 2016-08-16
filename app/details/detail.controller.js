(function() {
    'use strict';

    angular
        .module('app')
        .controller('DetailsController', DetailsController);

    DetailsController.$inject = ['MovieFactory'];

    /* @ngInject */
    function DetailsController(MovieFactory) {
        var vm = this;
        vm.title = 'DetailsController';

        // MovieFactory.getMovieData().then(
        //     function(response) {

        // });
        
        
        activate();

        ////////////////

        function activate() {
        }
    }
})();