(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService', 'catItems'];
function CategoriesController(MenuDataService, catItems) {
  var categoriesList = this;
  // POR QUE PRECISEI COLOCAR ESSE .data??? O resolve não pega o dado???
  categoriesList.items = catItems.data;
  console.log("Categorias[0]: " + categoriesList.items[0].id);
}


})();
