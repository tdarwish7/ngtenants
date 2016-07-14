

(function(){
  angular.module('ngtenants')
          .factory('TenantService', TenantService);

  TenantService.$inject = ['$http'];

  function TenantService($http){
    var baseUrl = 'https://pure-bastion-92280.herokuapp.com/'
    var o = {
      create: createListing,
      readAll: getAll,
      update: updateListing,
      delete: deleteListing,
      listings: []
    };
    return o;

    function createListing(location, houseOrApt, numberOfRooms, numberOfBathrooms, numberOfRoommates, typeOfLease, arePetsAllowed){
      var info = {
        location: location,
        houseOrApt: houseOrApt,
        numberOfRooms: numberOfRooms,
        numberOfBathrooms: numberOfBathrooms,
        numberOfRoommates: numberOfRoommates,
        typeOfLease: typeOfLease,
        arePetsAllowed: arePetsAllowed
      };
      return $http.post(baseUrl+'listings',info)
                        .then(function(response){
                          getAll();
                        });
    }
    function getAll(){
      return $http.get(baseUrl+'listings')
                  .then(function(response){
                    o.listings = response.data;
                  });
    }
    function updateListing(id, newListing){
      return $http.put(baseUrl+'listings/'+id, newListing)
                  .then(function(response){
                    getAll();
                  });
    }
    function deleteListing(id){
      return $http.delete(baseUrl+'listings/'+id)
                  .then(function(response){
                    getAll();
                  })
    }
  }
})()
