
(function(){
  angular.module('ngbears')
         .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'BearsServices'];

  function MainController($scope, BearsServices){
    $scope.message = 'Hey you!!!';

    var bears;
    BearsServices.readAll()
                 .then(function(response){
                   bears = BearsServices.bears;
                   console.log(bears);
                 });
    BearsServices.create();
    BearsServices.delete();
    BearsServices.update();
  }
})();
