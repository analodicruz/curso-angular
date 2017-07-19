(function () {

angular.module('restaurant')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['user', 'MenuService', 'ApiPath'];
function MyInfoController(user, MenuService, ApiPath) {
  var $ctrl = this;
  $ctrl.user = user;
  $ctrl.basePath = ApiPath;
  console.log("MyInfoController.user");
  console.log($ctrl.user);
  console.log($ctrl.basePath);
  if (user){
    MenuService.getMenuItem($ctrl.user.menunumber).then(function(response){
      $ctrl.menuItem = response.data;
      console.log("MyInfoController.menuItem");
      console.log($ctrl.menuItem);
    });
  }
}
})();
