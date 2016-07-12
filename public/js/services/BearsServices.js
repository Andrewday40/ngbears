
(function(){
  angular.module('ngbears')
         .factory('BearsServices', BearsServices);

  BearsServices.$inject = ['$http'];

  function BearsServices($http){
    var object = {
      create: createBear,
      readAll: getAll,
      update: updateBear,
      delete: deleteBear,
      bears: []
    };
    return object;

    function createBear(){}
    function getAll(){
      return $http.get('https://stormy-crag-36889.herokuapp.com/bears')
                  .then(function(response){
                    object.bears = response.data;
                    console.log('BearsServices bears', object.bears);
                  })
    }
    function updateBear(){}
    function deleteBear(){}
  }
})();
