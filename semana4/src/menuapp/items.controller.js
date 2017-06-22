(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['MenuDataService', 'items'];
function ItemsController(MenuDataService, items) {
  var itemsList = this;
  // POR QUE PRECISEI COLOCAR ESSE .data??? O resolve não pega o dado???
  itemsList.items = items.data.menu_items;
  console.log("Itens[0]: " + itemsList.items[0]);
}


})();
