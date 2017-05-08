(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.checkMessage = "Please enter data first";
  $scope.listItens = "";

  $scope.checkItens = function () {
    var itens = $scope.listItens.split(",");
    var filteredItens = itens.filter(function(e) {return e.trim() != ""});
    if (filteredItens.length == 0){
      $scope.checkMessage = "Please enter data first";
    }
    else if (filteredItens.length > 3){
      $scope.checkMessage = "Too much!";
    }
    else{
      $scope.checkMessage = "Enjoy!";
    }
  };
}

})();
