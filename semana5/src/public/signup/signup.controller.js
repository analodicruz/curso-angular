(function () {

angular.module('restaurant')
.controller('SignUpController', SignUpController);

function SignUpController() {
  var reg = this;

  reg.submit = function () {
    reg.completed = true;
    console.log("Completed: " + reg.completed);

  };
}

})();
