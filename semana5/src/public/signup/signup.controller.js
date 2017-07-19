(function () {

angular.module('restaurant')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var reg = this;

  reg.completed = false;

  reg.user = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    menunumber: ""
  };

  reg.menunumberOk = false;

  reg.submit = function () {
    // Salva o user no serviço
    MenuService.saveUser(reg.user);
    reg.completed = true;
  };

  reg.validateMenuNumber = function(menunumber){
    console.log("blur " + menunumber);
    MenuService.getMenuItem(menunumber).then(function(response) {
      reg.menuItem = response.data;
      reg.menunumberOk = true;
    })
    .catch(function(error){
      reg.menunumberOk = false;
    });
  };
}

})();
