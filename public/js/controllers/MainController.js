
(function (){
  angular.module('ngtenants') //getter
        .controller('MainController', MainController);


  MainController.$inject = ['$scope', 'TenantService'];

  function MainController($scope, TenantService){
    $scope.message = 'blahblahblahblah';

    var listings;
    TenantService.readAll()
                  .then(function(){
                    listings = TenantService.listings;
                    console.log(listings);
                  });
  }
})();
