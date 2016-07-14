
(function(){
  angular.module('ngbears')
         .factory('BearsServices', BearsServices);

  BearsServices.$inject = ['$http'];

  function BearsServices($http){
    var baseUrl = 'https://stormy-crag-36889.herokuapp.com/';
    var object = {
      create: createBear,
      readAll: getAll,
      update: updateBear,
      delete: deleteBear,
      bears: []
    };
    return object;

    function createBear(si, color, loc){
      var info = {
        size: si,
        color: color,
        location: loc
      };
      return $http.post(baseUrl+'bears', info)
                  .then(function(response){
                    console.log('create', response);
                    getAll();
                  });
    }
    function getAll(){
      return $http.get(baseUrl+'bears')
                  .then(function(response){
                    object.bears = response.data;
                    console.log('BearsServices bears', object.bears);
                  });
    }
    function updateBear(id, newBear){
      return $http.put(baseUrl+'bears/'+id, newBear)
                  .then(function(response){
                    console.log('update', response);
                    getAll();
                  });
    }
    function deleteBear(id){
      return $http.delete(baseUrl+'bears/'+id)
                  .then(function(response){
                    console.log('delete', response);
                    getAll();
                  });
    }
  }
})();
