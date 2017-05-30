(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItems);


function FoundItems() {
  var ddo = {
    restrict: "E",
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      showMessage: '<',
      onRemove: '&'
    },
    controller: NarrowItDownDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var nid = this;
  nid.found = [];
  nid.searchTerm = "";
  nid.haveToShowMessage = false;

  nid.getMatchedMenuItems = function(){

    if (nid.searchTerm.length == 0){
      nid.found = [];
      nid.haveToShowMessage = true;
      return;
    }

    var promisse = MenuSearchService.getMatchedMenuItems(nid.searchTerm);
    promisse.then(function(result){
      nid.found = result;
      nid.haveToShowMessage = (nid.found.length == 0);
    });
  };

  nid.removeItem = function (itemIndex) {
    nid.found.splice(itemIndex, 1);
  };

}

function NarrowItDownDirectiveController() {
  var list = this;
  // não sei o que fazer aqui!!!
}




MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm)  {
    return $http({
         method: "GET",
         url: (ApiBasePath + "/menu_items.json"),
       }).then(function (result) {
          var foundItems = [];

          var allItems = result.data.menu_items;

          for(var i = 0; i < allItems.length; i++) {
            var description = allItems[i].description;
            if (description.toLowerCase().indexOf(searchTerm) > -1) {
              foundItems.push(allItems[i]);
            }
          }
          return foundItems;
        });

  };

}

})();
