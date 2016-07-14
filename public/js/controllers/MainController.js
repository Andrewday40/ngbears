
(function(){
  angular.module('ngbears')
         .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'BearsServices'];

  function MainController($scope, BearsServices){
    $scope.bears = BearsServices.bears;
    $scope.create = createBear;
    $scope.delete = deleteBear;
    getBears();





    function getBears(){
      BearsServices.readAll()
                   .then(function(){
                     $scope.bears = BearsServices.bears;
                     console.log($scope.bears);
                   });
    }

    function createBear(size, color, location){
      BearsServices.create(size, color, location)
                   .then(function(){
                     $scope.size = '';
                     $scope.color = '';
                     $scope.location = '';
                     getBears();
                   });
    }

    function deleteBear(id){
      console.log(id);
      BearsServices.delete(id)
                   .then(function(){
                     getBears();
                   });
    }
  }
})();
