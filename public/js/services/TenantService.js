

(function(){
  angular.module('ngtenants')
          .factory('TenantService', TenantService);

  TenantService.$inject = ['$http'];

  function TenantService($http){
    var o = {
      create: createListing,
      readAll: getAll,
      update: updateListing,
      delete: deleteListing,
      listings: []
    };
    return o;

    function createListing(){}
    function getAll(){
      return $http.get('https://pure-bastion-92280.herokuapp.com/listings')
                  .then(function(response){
                    o.todos = response.data;
                  });
    }
    function updateListing(){}
    function deleteListing(){}
  }
})()
