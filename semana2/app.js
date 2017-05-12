(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list = this;

  list.items = ShoppingListCheckOffService.getToBuyItems();

  list.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list = this;

  list.items = ShoppingListCheckOffService.getBoughtItems();
}

// Serviço
function ShoppingListCheckOffService() {
  var service = this;

  var tobuyitems = [{name: 'Chocolate', quantity: 10},
               {name: 'Guaraná', quantity: 5},
               {name: 'Sorvete', quantity: 2},
               {name: 'Amendoim', quantity: 3},
               {name: 'Doritos', quantity: 2},
               {name: 'Biscoito', quantity: 4},
               {name: 'Goiabada', quantity: 1} ];

  var boughtitems = [];

  service.buyItem = function (itemIndex) {
      var itemToBuy = tobuyitems[itemIndex];
      boughtitems.push(itemToBuy);
      tobuyitems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return tobuyitems;
  };

  service.getBoughtItems = function () {
    return boughtitems;
  };

}

})();
