
(function (){
  angular.module('ngtenants') //getter
        .controller('MainController', MainController);


  MainController.$inject = ['$scope', 'TenantService'];

  function MainController($scope, TenantService){
    $scope.listings = TenantService.listings;
    $scope.create = createListing;
    getListings();

    function getListings(){
      TenantService.readAll()
                  .then(function(){
                    $scope.listings = TenantService.listings;
                    console.log($scope.listings);                    
                  })
    }
    function createListing(location, houseOrApt, numberOfRooms, numberOfBathrooms, numberOfRoommates, typeOfLease, arePetsAllowed){
      TenantService.create(location, houseOrApt, numberOfRooms, numberOfBathrooms, numberOfRoommates, typeOfLease, arePetsAllowed)
                    .then(function(){
                    $scope.location = '';
                    $scope.houseOrApt = '';
                    $scope.numberOfRooms = '';
                    $scope.numberOfBathrooms = '';
                    $scope.numberOfRoommates = '';
                    $scope.typeOfLease = '';
                    $scope.arePetsAllowed = '';
                    getListings();
                    })
    }

  }


})();
