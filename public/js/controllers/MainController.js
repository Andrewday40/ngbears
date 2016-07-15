
(function(){
  angular.module('ngbears')
         .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'BearsServices'];

  function MainController($scope, BearsServices){
    $scope.bears = BearsServices.bears;
    $scope.create = createBear;
    $scope.delete = deleteBear;
    $scope.edit = editBears;
    $scope.update = updateBears;
    getBears();

    function editBears(bears){
      bears.editing = true;
    }

    function updateBears(bears){
      bears.editing = false;
      bears.isAwake = bears.isAwake.toString();
      bears.hasKids = bears.hasKids.toString();
      bears.isHungry = bears.isHungry.toString();
      BearsServices.update(bears.id, bears)
                   .then(function(){
                     getbears();
                   });
    }


    function getBears(){
      BearsServices.readAll()
                   .then(function(){
                     $scope.bears = BearsServices.bears;
                     console.log($scope.bears);
                   });
    }

    function createBear(size, type, location){
      BearsServices.create(size, type, location)
                   .then(function(){
                     $scope.size = '';
                     $scope.type = '';
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
