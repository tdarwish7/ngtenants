
(function (){
  angular.module('ngtenants') //getter   //geting ngtenants (buildingblocks)
        .controller('MainController', MainController);  //establishing name for function as well as create new function name MainController


  MainController.$inject = ['$scope', 'TenantService'];  // injecting TenantService factory into maincontroller which injects into DOM using $scope

  function MainController($scope, TenantService){    //Passing 'actions'? using scope to the DOM ????!?!?!
    $scope.listings = TenantService.listings;
    $scope.create = createListing;
    $scope.delete = deleteListing;
    $scope.edit = editListing;
    $scope.update = updateListing;
    getListings();

    function editListing(listing){
      listing.editing = true;
    }

    function updateListing(listing){
      listing.editing = false;
      TenantService.update(listing.id, listing)
                  .then(function(){
                    getListings();
                  });
    }

    function getListings(){
      TenantService.readAll()
                  .then(function(){
                    $scope.listings = TenantService.listings;
                    console.log($scope.listings);
                  });
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

    function deleteListing(id){
      console.log(id);
      TenantService.delete(id)
                    .then(function(){
                      getListings();
                    });
    }

  }


})();
